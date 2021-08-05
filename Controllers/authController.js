const User = require('./../Models/userModel');
const AppError = require('./../Util/AppError');
const { catchAsync } = require('./../Util/catchAsync');
const jwt = require('jsonwebtoken');

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
  const token = jwt.sign({ id: newUser._id }, process.env.JWT, {
    expiresIn: process.env.JWT_EXPIRY
  });

  res.status(201).json({
    status: true,
    user: {
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      description: newUser.description,
      niche: newUser.niche,
      job: newUser.job,
      token
    }
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  if (!email || !password)
    return next(new AppError('please provide email and password', 400));
});
