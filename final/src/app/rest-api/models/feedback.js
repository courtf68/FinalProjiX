const mongoose = require('mongoose');
//turn to true later
const feedbackSchema = new mongoose.Schema(
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

module.exports = mongoose.model('feedback', feedbackSchema);