/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

const Movie = require('../models/Movie.js');

router.get('/', (req, res, next) => {
  Movie.find({})
    .then((films) => {
      res.render('movies', { films });
    })
    .catch((error) => {
      console.log(`${error}`);
    });
});
router.get('/:id', (req, res, next) =>{
  const { id } = req.params;
  Movie.findById({ _id: id })
    .then((film) => {
      res.render('details', film);
    });
});


module.exports = router;
