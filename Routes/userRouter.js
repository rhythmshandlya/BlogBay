const express = require('express');
const { protect, restrictTo } = require('../Controllers/authController');
const userController = require('../Controllers/userController.js');
const authController = require('../Controllers/authController.js');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.patch('/verifyEmail/:token', authController.verifyEmail);
router.patch('/updatePassword', protect, authController.updatePassword);
router.patch('/update', protect, userController.update);
router.delete('/delete', protect, userController.delete);
router.get('/isLoggedIn', authController.isLoggedIn);

// router.route('/').get(userController.getAllUsers);

router
  .route('/')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
