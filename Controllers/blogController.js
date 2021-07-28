const Blog = require('./../Models/blogModel.js');

exports.getAllBlogs = (req, res) => {
  try {
    const allBlogs = Blog.find({});
    res.status(200).json({
      status: true,
      data: {
        allBlogs
      }
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: false,
      err
    });
  }
};

exports.addBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body);
    console.log(newBlog);
    res.status(201).json({
      status: true,
      data: {
        title: newBlog.title,
        date: newBlog.date,
        authorID: newBlog.authorID
      }
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      error
    });
  }
};

exports.getBlog = (req, res) => {};
exports.updateBlog = (req, res) => {};
exports.deleteBlog = (req, res) => {};
