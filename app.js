const path = require('path');
const express = require('express');
require('dotenv').config();
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Load env vars


// Connect to database
connectDB();

// Route files
const user = require('./routes/user');

const app = express();

// Body parser
app.use(express.json());


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Mount routers
// app.use('/api/v1/bootcamps', bootcamps);
// app.use('/api/v1/courses', courses);
// app.use('/api/v1/auth', auth);
app.use('/api/v1/user', user);
// app.use('/api/v1/reviews', reviews);

app.use(errorHandler);

const PORT =5000;

const server = app.listen(
    PORT,
    console.log(
        `Server running  on port ${PORT}`
    )
);
