'use strict'
const fs = require('fs').promises;
const data = require('../data/firtsDay.json');

const createArray = async (req,res) => {
    try {
        const {length, max} = req.body;
        const array = Array(length).fill().map(() => {
            return Array(length).fill().map(() => Math.round(Math.random() * max))
        })
        await fs.writeFile('./data/firtsDay.json', JSON.stringify(array)); 
        res.status(200).send({"message" : "hola"})
    } catch (error) {
        res.status(500).send(error)
    }
};


const launchProcess = (req,res) => {
    try {
        for(let i = 0; i < req.query.iterations; i++){
            data.forEach((numbers) => {
                let index = numbers.indexOf(Math.max(...numbers))
                numbers[index] = Math.ceil(numbers[index]/2)
            })
        }

        res.status(200).send({numeros: data[0]})
    } catch (error) {
        res.status(500).send({error:error})
    }
};

module.exports = {createArray, launchProcess}