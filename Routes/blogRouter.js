const express = require('express');
const { protect, restrictTo } = require('../Controllers/authController');
const blogController = require('./../Controllers/blogController');

const router = express.Router();

router
  .route('/')
  .get(blogController.getAllBlogs)
  .post(protect, blogController.addBlog);

router
  .route('/:id')
  .get(blogController.getBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

router
  .route('/upvote/:id')
  .patch(blogController.upvoteBlog)

router
  .route('/downvote/:id')
  .patch(protect,blogController.downvoteBlog)

router.get('/search/:text', blogController.search);

module.exports = router;
