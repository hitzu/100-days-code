'use strict'

const users = require("../data/users");
const professions = require("../data/professions");

const dataBaseRequestProfessionByID = (id, callBack) => {
    setTimeout(() =>{
        callBack(null, professions.filter((profession) => {
            return profession.ID == id;
        }))
    }, 100);
}

const dataBaseRequestGetUser = (id, callBack) => {
    setTimeout(() =>{
        callBack(null, users.filter((user) => {
            return user.ID == id
        }))
    }, 100);
}

const dataBaseRequestGetAllUsers = (callBack) => {
    setTimeout(() =>{
        callBack(null, users);
    }, 100);
}
const getUsers = (req,res) => {
        dataBaseRequestGetAllUsers((err,usersFound) => {
            if (err){
                res.status(500).send(err);
            }else{
                res.status(200).send({users: usersFound});
        }}); 
}

const getUserByID = (req,res) => {
    dataBaseRequestGetUser(req.query.idUser,(err, userFound) =>{
        if (err){
            res.status(500).send(err);
        }else{
            res.status(200).send({users: userFound})
        //     dataBaseRequestProfessionByID(userFound[0].profession_id, (err, professionFound) =>{
        //         if (err){
        //             res.status(500).send(err);
        //         }else{
        //         res.status(200).send({users : professionFound[0]});
        //     }})
        // }})
    }}); 
}

const getProfessionByUser = (req,res) => {
    dataBaseRequestGetUser(req.query.idUser,(err, userFound) =>{
        if (err){
            res.status(500).send(err);
        }else{
            dataBaseRequestProfessionByID(userFound[0].profession_id, (err, professionFound) =>{
                if (err){
                    res.status(500).send(err);
                }else{
                res.status(200).send({users : professionFound[0]});
            }})
        }});
}

module.exports = {getUsers, getUserByID, getProfessionByUser};