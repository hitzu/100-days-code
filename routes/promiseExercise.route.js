'use strict'
const express = require('express');
const promiseExerciseController = require('../controllers/promiseExercise.controller')

const api = express.Router();

api.get("/users", promiseExerciseController.getUsers);
api.get("/user-by-id", promiseExerciseController.getUserByID);

module.exports = api;