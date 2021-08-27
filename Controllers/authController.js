const User = require('./../Models/userModel');
const { promisify } = require('util');
const AppError = require('./../Util/AppError');
const { catchAsync } = require('./../Util/catchAsync');
const jwt = require('jsonwebtoken');
const Email = require('../Util/Email');

const getJwt = (userId, secret, exp) => {
  return jwt.sign({ id: userId }, secret, {
    expiresIn: exp
  });
};
const sendCookie = (res, token) => {
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRY * 24 * 60 * 60 * 1000
    ),
    httpOnly: true
  };
  if (process.env.MODE === 'PRO') cookieOptions.secure = true;
  res.cookie('jwt', token, cookieOptions);
};

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
    niche: req.body.niche,
    job: req.body.job,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  });
  const verificationToken = getJwt(
    newUser._id,
    process.env.JWT_EMAIL,
    process.env.JWT_EMAIL_EXPIRY
  );
  await new Email(newUser, verificationToken).sendEmailConfirmation(
    `localhost:${process.env.PORT}/api/v1/user/verifyEmail/${verificationToken}`,
    'armaanbgp@gmail.com'
  );

  const token = getJwt(newUser._id, process.env.JWT, process.env.JWT_EXPIRY);
  sendCookie(res, token);

  res.status(201).json({
    status: true,
    message:
      'A confirmation mail has been send to your email, please verify for full access',
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      description: newUser.description,
      niche: newUser.niche,
      job: newUser.job
    },
    token
  });
});

exports.verifyEmail = catchAsync(async (req, res, next) => {
  const payLoad = await promisify(jwt.verify)(
    req.params.token,
    process.env.JWT_EMAIL
  );
  const user = await User.findByIdAndUpdate(
    payLoad.id,
    { isVerified: true },
    { new: true }
  );
  res.status(200).json({
    status: true,
    message: 'Email verified!',
    user
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password)
    return next(new AppError('please provide email and password', 400));

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(req.body.password, user.password)))
    return next(new AppError('Incorrect email or password', 401));

  const token = getJwt(user._id, process.env.JWT, process.env.JWT_EXPIRY);
  sendCookie(res, token);

  res.status(200).json({
    status: true,
    message: 'Login successful',
    token
  });
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  if (req.body.email) {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return next(new AppError('No user found with this email'), 404);
    //User exists
    const token = getJwt(
      user._id,
      process.env.JWT_FORGOT_PASS,
      process.env.JWT_FORGOT_PASS_EXPIRY
    );
    await new Email(user).sendEmailForgotPassword(
      `localhost:${process.env.PORT}/api/v1/user/resetPassword/${token}`
    );
    return res.status(200).json({
      status: true,
      message: 'Confirmation link send to email'
    });
  }
  return next(new AppError('Please provide an email'), 404);
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const payLoad = await promisify(jwt.verify)(
    req.params.token,
    process.env.JWT_FORGOT_PASS
  );
  const user = await User.findById(payLoad.id);
  if (!user) return next(new AppError('Token is invalid or has expired'), 401);

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordChangedAt = Date.now();
  await user.save();

  const token = getJwt(user._id, process.env.JWT, process.env.JWT_EXPIRY);
  sendCookie(res, token);
  res.status(200).json({
    status: true,
    message: 'Password changed successfully',
    token
  });
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).select('+password');
  if (!(await user.correctPassword(req.body.currentPassword, user.password)))
    return next(new AppError('Your current password is wrong', 401));

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordChangedAt = Date.now();
  await user.save();

  const token = getJwt(user._id, process.env.JWT, process.env.JWT_EXPIRY);
  sendCookie(res, token);
  res.status(200).json({
    status: true,
    message: 'Password changed successfully',
    token
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token = '';
  if (
    (req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')) ||
    req.cookies.jwt
  ) {
    token = req.cookies.jwt || req.headers.authorization.split(' ')[1];
  }
  if (!token) return next(new AppError('Please login to get access.', 401));

  const payLoad = await promisify(jwt.verify)(token, process.env.JWT);
  const user = await User.findById(payLoad.id).select('+isVerified');
  if (!user.isVerified)
    return next(
      new AppError('Please verify your email to access this route', 401)
    );

  if (!user) return next(new AppError('User does not exists any longer', 401));

  if (user.changedPassword(payLoad.iat)) {
    return next(new AppError('Password was changed, please login again', 401));
  }
  req.user = user;
  next();
});
exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError('You do not have access to this route', 403));
    }
    next();
  };

exports.isLoggedIn = catchAsync(async (req, res, next) => {
  let token = req.cookies.jwt;
  if (!token) return next(new AppError('Please login to get access.', 401));
  const payLoad = await promisify(jwt.verify)(token, process.env.JWT);
  const user = await User.findById(payLoad.id).select(
    '+isVerified +currentBlog'
  );

  if (!user) return next(new AppError('User does not exists any longer', 401));

  if (user.changedPassword(payLoad.iat))
    return next(new AppError('Password was changed, please login again', 401));

  res.status(200).json({
    status: true,
    message: 'User is loggedIn',
    user
  });
});
