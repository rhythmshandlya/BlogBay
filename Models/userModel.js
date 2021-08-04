const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name!']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please enter your email!'],
    validate: [isEmail, 'Please provide valid Email']
  },
  description: {
    type: String,
    maxLength: 100
  },
  niche: {
    type: String,
    maxLength: 20
  },
  job: {
    type: String,
    maxLength: 20
  },
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minLength: 8,
    select: false
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm the password'],
    //This validator will work on SAVE or CREATE
    validate: {
      validator: function (el) {
        return el === this.password;
      }
    }
  }
});

userSchema.pre('save', async function fn(next) {
  if (!this.isModified()) return next();
  this.password = await bcrypt.hash(this.password, 13);
  this.confirmPassword = undefined;
  next();
});

module.exports = mongoose.model('user', userSchema);
