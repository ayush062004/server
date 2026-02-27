const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  examName: { type: String, required: true },
  course: { type: String, required: true },
  totalMarks: { type: Number, required: true },
  passingMarks: { type: Number, required: true },
  score: { type: Number, required: true },
  passed: { type: Boolean, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Result", resultSchema);
