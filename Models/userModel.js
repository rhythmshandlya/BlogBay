const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

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
  role: {
    type: String,
    enum: ['admin', 'mod', 'user'],
    default: 'user'
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
  },
  passwordChangedAt: Date
});

//Will work pre(before) save!
userSchema.pre('save', async function fn(next) {
  if (!this.isModified()) return next();
  this.password = await bcrypt.hash(this.password, 13);
  this.confirmPassword = undefined;
  next();
});

//An instance method, available on every instance of document
userSchema.methods.correctPassword = async function (candidatePwd, userPwd) {
  return await bcrypt.compare(candidatePwd, userPwd);
};

//returns true if user changes password.
userSchema.methods.changedPassword = function (timeStamps) {
  if (this.passwordChangedAt) {
    const pwdInSec = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return timeStamp < pwdInSec;
  }
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  // console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.model('user', userSchema);
