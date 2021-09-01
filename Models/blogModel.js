const { isURL } = require('validator');
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
  blogImages: {
    type: Array
  },
  category: {
    type: String,
    default: 'General'
  },
  date: {
    type: Date,
    default: Date.now()
  },
  upvotes: {
    type: Number,
    default: 0
  },
  content: {
    type: Object,
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
