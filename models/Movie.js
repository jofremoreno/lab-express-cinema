const mongoose = require('mongoose');

const { Schema } = mongoose;

const movieSchema = new Schema({
  title: { type: String, required: true, unique: true },
  director: { type: String, required: true, unique: true },
  stars: [],
  image: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: true },
  showtimes: [],
});
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
