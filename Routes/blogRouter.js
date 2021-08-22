const express = require('express');
const { protect, restrictTo } = require('../Controllers/authController');
const blogController = require('./../Controllers/blogController');

const router = express.Router();

router
  .route('/currentBlog')
  .get(blogController.getCurrentBlog)
  .patch(blogController.updateCurrentBlog);

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
  .patch(protect,blogController.upvoteBlog)

router.get('/search/:text', blogController.search);

module.exports = router;
