const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection

// MongoDB connection string
const mongoURI = "mongodb+srv://deshpandemohit1999:Mohitvasant19@job-listing-db.z3f9obk.mongodb.net/?retryWrites=true&w=majority&appName=job-listing-db";

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully');
})
.catch((error) => {
  console.error('MongoDB connection error:', error);
});


// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/quizs', require('./routes/quizs'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
