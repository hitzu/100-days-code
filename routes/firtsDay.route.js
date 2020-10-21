'use strict'
const express = require('express');
const firtsDayController = require('../controllers/firtsDay.controller')

const api = express.Router();

api.post("/create-array", firtsDayController.createArray);
api.get("/launch-process", firtsDayController.launchProcess);

module.exports = api;