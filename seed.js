'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);
const Book = require('./models/book.js');

async function seed(){

  //structure is the SAME as our schema
  // title: {type: String, required: true},
  // description: {type: String, required: true},
  // status: {type: Boolean, required: true},
  // email: {type: String, required: true}
  // create my first Book
  await Book.create({
    title: 'Eloquent JavaScript',
    description: 'Book on JS put eloquently',
    status: true,
    email: 'reymercado.usa@gmail.com'
  });
  console.log('Eloquent JavaScript has been added');

  await Book.create({
    title: 'Green Eggs and Ham',
    description: 'Children\'s book about green eggs and ham',
    status: true,
    email: 'briant3275@gmail.com'
  });
  console.log('Green Eggs and Ham has been added');

  await Book.create({
    title: 'War and Peace',
    description: 'A large novel',
    status: true,
    email: 'har.francois@gmail.com'
  });
  console.log('War and Peace has been added');

  mongoose.disconnect();
}

seed();
