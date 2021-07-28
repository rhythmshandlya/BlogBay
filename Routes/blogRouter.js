const express = require('express');
const blogController = require('./../Controllers/blogController');

const router = express.Router();

router.route('/').get(blogController.getAllBlogs).post(blogController.addBlog);

router
  .route('/:id')
  .get(blogController.getBlog)
  .patch(blogController.updateBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
