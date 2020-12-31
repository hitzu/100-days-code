'use strict'
const express = require('express');
const promiseExerciseController = require('../controllers/promiseExercise.controller')

const api = express.Router();

api.get("/users", promiseExerciseController.getUsers);
api.get("/user-by-id", promiseExerciseController.getUserByID);
api.get("/profession-by-user", promiseExerciseController.getProfessionByUser);
api.get("/get-users-promises", promiseExerciseController.getUserWithPromises);
api.get("/get-profession-by-user-promises", promiseExerciseController.getProfessionByUserWithPromises);
api.get("/get-users-by-async-await", promiseExerciseController.getUsersByAsyncAwait);
api.get("/get-profession-by-id-async-await", promiseExerciseController.getProfessionByIDWithAsyncAwait);

api.post("/users-by-ID", promiseExerciseController.usersByID);
api.post("/users-by-ID-promise-all", promiseExerciseController.usersByIDPromiseAll);
module.exports = api;