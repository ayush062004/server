const mongoose = require('mongoose');

const examineeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true
  
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'delete'],
    default: 'inactive'
  },
  phoneno: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Examinee', examineeSchema);
