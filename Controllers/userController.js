const User = require('./../Models/userModel');
const AppError = require('./../Util/AppError');
const { catchAsync } = require('./../Util/catchAsync');
const { filterData } = require('./../Util/filterData');

exports.getAllUsers = async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: true,
    length: users.length,
    users
  });
};

exports.update = catchAsync(async (req, res, next) => {
  if (req.body.password || req.body.passwordConfirm)
    return next(new AppError('Cannot change user password from this route!'));

  bodyFilter = filterData(req.body, 'name', 'description', 'niche', 'job');
  const updatedUser = await User.findByIdAndUpdate(req.user._id, bodyFilter, {
    new: true,
    runValidator: true
  });
  res.status(200).json({
    status: true,
    user: updatedUser
  });
});
exports.delete = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });
  res.status(204).json({
    status: true,
    data: null
  });
});

exports.getUser = () => {};
exports.updateUser = () => {};
exports.deleteUser = () => {};
