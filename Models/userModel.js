const mongoose = require('mongoose');
const { isEmail, isURL } = require('validator');
const bcrypt = require('bcrypt');
const { dps, covers } = require('./../Data/dp_default');

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
  dp: {
    type: String,
    validate: [isURL, 'Please provide valid URL to your profile picture'],
    default: function () {
      return dps[~~(dps.length * Math.random())];
    }
  },
  cover: {
    type: String,
    validate: [isURL, 'Please provide valid URL to your cover photo'],
    default: function () {
      return covers[~~(covers.length * Math.random())];
    }
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
  currentBlog: {
    type: Object,
    select: false,
    default: undefined
  },
  upvotedBlogs: {
    type: Array,
    default: []
  },
  downvotedBlogs: {
    type: Array,
    default: []
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
  passwordChangedAt: Date,
  isVerified: {
    type: Boolean,
    default: false,
    select: false
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

//Will work pre(before) save!
userSchema.pre('save', async function fn(next) {
  if (!this.isModified()) return next();
  this.password = await bcrypt.hash(this.password, 13);
  this.confirmPassword = undefined;
  next();
});

userSchema.pre(/^find/, function fn(next) {
  this.find({ active: true });
  next();
});

//An instance method, available on every instance of document
userSchema.methods.correctPassword = async function (candidatePwd, userPwd) {
  return await bcrypt.compare(candidatePwd, userPwd);
};

//returns true if user changes password.
userSchema.methods.changedPassword = function (timeStamp) {
  if (this.passwordChangedAt) {
    const pwdInSec = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return timeStamp < pwdInSec;
  }
  return false;
};

module.exports = mongoose.model('user', userSchema);
