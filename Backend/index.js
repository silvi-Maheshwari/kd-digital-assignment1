const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const courseRoutes = require('./routes/courseRoutes');
const lectureRoutes = require('./routes/lectureRoutes');
// const connectDB = require('./config/db');

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors());

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://maheshwarisilvi98:silvi123@cluster0.jftpm.mongodb.net/books?retryWrites=true&w=majority" ,{
          
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};


// Middleware for Auth
const { authenticate } = require('./middleware/authMiddleware');

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/instructors', instructorRoutes);
app.use('/api/courses',  courseRoutes);
app.use('/api/lectures', lectureRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    connectDB()
console.log('server is connetd')
})
