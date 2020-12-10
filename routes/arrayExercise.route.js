'use strict'
const express = require('express');
const arrayExerciseController = require('../controllers/arrayExercise.controller')

const api = express.Router();

api.post("/anagrama", arrayExerciseController.anagrama);

module.exports = api;