const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();   // 👈 important

const app = express();

app.use(cors());
app.use(express.json());

// 👇 yaha localhost hata ke env variable use karenge
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((er) => {
    console.log(er);
  });

// Routes
app.use('/api/admin', require('./routes/adminRoute'));
app.use('/api/session', require('./routes/sessionRoute'));
app.use('/api/subject', require('./routes/subjectRoute'));
app.use('/api/exams', require('./routes/examinationRoute'));
app.use('/api/question', require('./routes/questionbankRoute'));
app.use('/api/examinee', require('./routes/examineeRoute'));
app.use('/api/message', require('./routes/messageRoute'));
app.use('/api/admindashboard', require('./routes/adminDashboard'));

// 👇 PORT bhi dynamic rakhenge (Render ke liye important)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});