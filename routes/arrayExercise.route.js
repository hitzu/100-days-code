'use strict'
const express = require('express');
const arrayExerciseController = require('../controllers/arrayExercise.controller')

const api = express.Router();

api.post("/anagrama", arrayExerciseController.anagrama);
api.post("/combinando-arreglos", arrayExerciseController.combinandoArray);
api.post("/suma-pares", arrayExerciseController.sumaPares);
api.post("/busqueda-binaria",arrayExerciseController.busquedaBinaria);
api.post("/crear-arreglo", arrayExerciseController.createArray);

module.exports = api;