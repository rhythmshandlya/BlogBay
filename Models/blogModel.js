const {  isURL } = require('validator');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const BlogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  blogImage:{
    type:String,
    validate: [isURL, 'Please provide valid URL to your profile picture'],
  },
  date: {
    type: Date,
    default: Date.now()
  },
  content: {
    type: String,
    required: true
  },
  authorID: {
    type: String,
    validate: {
      validator: function (v) {
        return mongoose.isValidObjectId(this.authorID);
      },
      message: (props) => `Invalid AuthorID`
    }
  }
});

module.exports = mongoose.model('blog', BlogSchema);
