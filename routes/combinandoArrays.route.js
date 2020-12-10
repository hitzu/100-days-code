'use strict'
const express = require('express');
const combinandoArrays = require('../controllers/combinandoArray.controller')

const api = express.Router();

api.post("/combinando-arreglos", combinandoArrays.combinandoArray);

module.exports = api;