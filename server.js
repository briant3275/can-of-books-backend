'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

// bring in mongoose
const mongoose = require('mongoose');

// must bring in a schema IF we want to interact with that model
const Book = require('./models/book.js');

//connect Mongoose to our MongoDB
mongoose.connect(process.env.DB_URL);

// add validation to confirm we are wired up to our mongo DB
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});

const app = express();

app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.status(200).send('Greetings from the server!');
});

app.get('/books', getBooks);

async function getBooks(req, res, next) {
  try {
    // maybe for your lab???  why???
    let results = await Book.find({email: req.query.email});
    // let queryObject = {};
    // if(req.query.email) {
    //   let queryObject.email = req.query.email;
    // }

    // let results = await Book.find(queryObject);
    res.status(200).send(results);
    console.log('results', results);
  } catch(error){
    console.log('error', error);
    next(error);
  }
}

app.get('/test', (request, response) => {

  response.send('test request received');

});

app.get('*', (req, res) => {
  res.status(404).send('Not sure what you\'re looking for, but this isn\'t it');
});

app.use((error, req, res, next) => {
  res.status(500).send(error.message);
});


app.listen(PORT, () => console.log(`listening on ${PORT}`));
