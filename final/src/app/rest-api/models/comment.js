const mongoose = require('mongoose');
//turn to true later
const commentSchema = new mongoose.Schema(
  {
    id:{
        type: String,
        required:true,
    },
    content: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('comment', commentSchema);