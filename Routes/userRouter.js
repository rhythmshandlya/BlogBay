const express = require('express');
const userController = require('../Controllers/userController.js');
const authController = require('../Controllers/authController.js');

//User Router
const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.route('/').get(userController.getAllUsers);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
