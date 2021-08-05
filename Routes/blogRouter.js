const express = require('express');
const { protect, restrictTo } = require('../Controllers/authController');
const blogController = require('./../Controllers/blogController');

const router = express.Router();

router
  .route('/')
  .get(protect, blogController.getAllBlogs)
  .post(protect, restrictTo('admin'), blogController.addBlog);

router
  .route('/:id')
  .get(blogController.getBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
