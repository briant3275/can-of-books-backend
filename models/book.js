'use strict';

// bring in mongoose for us to use
const mongoose = require('mongoose');

// extract the Schema property form the mongoose object
const { Schema } = mongoose;

// create a book schema, defines how our object will be structured
const bookSchema = new Schema ({
  title: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: Boolean, required: true},
  email: {type: String, required: true}
});

// define our model(give it mongoose functionality and a predefined schema to shape our data)
const BookModel = mongoose.model('Book', bookSchema);

// export the model so we can use it!
module.exports = BookModel;
