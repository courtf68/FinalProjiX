const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization');
  next();
});

app.use('/feed', feedRoutes);

mongoose
  .connect(
    'mongodb+srv://victorphan101:RjbdpVF8DR2tpkn3@cluster0.nqvv5.mongodb.net/Cluster0?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(4200);
  })
  .catch((err) => console.log(err));