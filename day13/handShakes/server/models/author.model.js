const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, "Name must be at least 3 characters long"],
    validate: {
      validator: function(v) {
        return /^[a-zA-Z]/.test(v);
      },
      message: "Name cannot start with a digit"
    }
  },
  age: {
    type: Number,
    min: [0, "Age cannot be negative"]
  }
}, { timestamps: true });
module.exports = mongoose.model('Author', authorSchema);