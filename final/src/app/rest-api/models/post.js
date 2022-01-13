const mongoose = require('mongoose');
//turn to true later
const postSchema = new mongoose.Schema(
  {
    name:{
        type: String,
        required:false,
    },
    title: {
      type: String,
      required: false,
    },
    feedback_content: {
      type: String,
      required: false,
    },
    comment_content: {
        type: String,
        required: false,
    },
    contact_content: {
        type: String,
        required: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);