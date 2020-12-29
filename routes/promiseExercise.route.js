'use strict'
const express = require('express');
const promiseExerciseController = require('../controllers/promiseExercise.controller')

const api = express.Router();

api.get("/users", promiseExerciseController.getUsers);
api.get("/user-by-id", promiseExerciseController.getUserByID);
api.get("/profession-by-user", promiseExerciseController.getProfessionByUser);

module.exports = api;