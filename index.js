const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// ✅ Proper CORS configuration
app.use(cors({
  origin: [
    "http://localhost:5173", // local dev
    "https://client-amber-three-51.vercel.app" // production frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// ✅ MongoDB connection
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

// ✅ Dynamic port (Render required)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});