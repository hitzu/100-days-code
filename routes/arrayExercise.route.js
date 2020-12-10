'use strict'
const express = require('express');
const arrayExerciseController = require('../controllers/arrayExercise.controller')

const api = express.Router();

api.post("/anagrama", arrayExerciseController.anagrama);
api.post("/combinando-arreglos", arrayExerciseController.combinandoArray);

module.exports = api;