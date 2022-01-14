const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const feedbackRoutes = require('./routes/feedback');
const commentRoutes = require('./routes/comment');
const contactRoutes = require('./routes/contact');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');
  next();
});

app.use('/feedback', feedbackRoutes);
app.use('/comment', commentRoutes);
app.use('/contact', contactRoutes);

mongoose
  .connect(
    'mongodb+srv://victor:gi7Ouh3KYyoa9E4F@cluster0.nqvv5.mongodb.net/Cluster0?retryWrites=true&w=majority'
  
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(4200);
  })
  .catch((err) => console.log(err));