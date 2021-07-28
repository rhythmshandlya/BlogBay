const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    require: false,
    default: Date.now()
  },
  content: {
    type: String,
    required: true
  },
  authorID: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('blog', BlogSchema);
