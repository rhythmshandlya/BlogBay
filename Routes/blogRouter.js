const express = require('express');
const controller = require('./../controllers/BlogController');

//Blog Router
const router = express.Router();

router.route('/').get(controller.getAllBlogs).post(controller.addBlog);

router
  .route('/:id')
  .get(controller.getBlog)
  .patch(controller.updateBlog)
  .delete(controller.deleteBlog);

module.exports = router;
