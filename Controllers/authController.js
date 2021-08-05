const User = require('./../Models/userModel');
const { promisify } = require('util');
const AppError = require('./../Util/AppError');
const { catchAsync } = require('./../Util/catchAsync');
const jwt = require('jsonwebtoken');
const Email = require('./../Util/email');

const getJwt = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT, {
    expiresIn: process.env.JWT_EXPIRY
  });
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
  const token = getJwt(newUser._id);

  res.status(201).json({
    status: true,
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

exports.login = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password)
    return next(new AppError('please provide email and password', 400));

  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(req.body.password, user.password)))
    return next(new AppError('Incorrect email or password', 401));

  const token = getJwt(user._id);
  res.status(200).json({
    status: true,
    message: 'Login successful',
    token
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token = '';
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) return next(new AppError('Please login to get access.'), 401);

  const payLoad = await promisify(jwt.verify)(token, process.env.jwt);
  const user = await User.findById(payLoad.id);

  if (!user) return next(new AppError('User does not exists any longer'), 401);

  if (user.changedPassword(payLoad.iat)) {
    return next(new AppError('Password was changed, please login again'));
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
