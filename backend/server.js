require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const http = require('http');

const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

// express app
const app = express();

const server = http.createServer(app);

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    server.listen(process.env.PORT, () => {
      console.log(`DB CONNECTED -- SERVER RUNNING ON PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
