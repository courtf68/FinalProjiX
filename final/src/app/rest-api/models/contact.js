const mongoose = require('mongoose');
//turn to true later
const contactSchema = new mongoose.Schema(
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

module.exports = mongoose.model('contact', contactSchema);