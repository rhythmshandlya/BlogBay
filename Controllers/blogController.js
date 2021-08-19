const AppError = require('../Util/AppError');
const Blog = require('./../Models/blogModel');
const { catchAsync } = require('./../Util/catchAsync');

exports.getAllBlogs = catchAsync(async (req, res) => {
  const allBlogs = await Blog.find(req.query);
  res.status(200).json({
    status: true,
    length: allBlogs.length,
    data: {
      allBlogs
    }
  });
});

exports.addBlog = catchAsync(async (req, res) => {
  req.body.authorID = req.user._id;
  const newBlog = await Blog.create(req.body);
  res.status(201).json({
    status: true,
    data: {
      title: newBlog.title,
      date: newBlog.date,
      authorID: newBlog.authorID
    }
  });
});

exports.getBlog = catchAsync(async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return next(new AppError('No tour found with this ID', 404));

  res.status(201).json({
    status: true,
    blog
  });
});

exports.updateBlog = catchAsync(async (req, res) => {
  const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body);
  if (!updatedBlog)
    return next(new AppError('No tour found with this ID', 404));

  res.status(200).json({
    status: true,
    data: {
      title: updatedBlog.title,
      date: updatedBlog.date,
      authorID: updatedBlog.authorID
    }
  });
});

exports.deleteBlog = catchAsync(async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog) return next(new AppError('No tour found with this ID', 404));

  res.status(200).json({
    status: true,
    message: 'Any such id was deleted if existing'
  });
});

exports.search = catchAsync(async (req, res, next) => {
  const searchField = req.params.text;
  const searchResults = await Blog.find({
    summary: { $regex: searchField, $options: '$i' }
  });
  res.status(200).json({
    searchField,
    searchResults
  });
});

exports.getCurrentBlog = catchAsync(async (req, res, next) => {
  const currentBlog = await User.find();
});

exports.updateCurrentBlog = (req, res, next) => {};
