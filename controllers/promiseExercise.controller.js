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

const getAllUsers = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(users)}, 100);
})

const getAllUsersAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(users)}, 100);
})
}

const getUserWithPromises = (req, res) => {
    getAllUsers.then((users) => {
        res.status(200).send({users: users});
    }).catch((err) => {
        console.log(err);
    })
}

const getUserID = (id) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() =>{
            let userFound = users.filter((user) => {
                return user.ID == id
            });
            if (userFound.length){
                resolve(userFound[0]);
            }else{
                resolve("Usuario no encontrado");
            }
        }, 200);
    })
}

const getProfByID = (id) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() =>{
            resolve(professions.filter((profession) => {
                return profession.ID == id
            }))
        }, 100);
    })
}

const getProfessionByUserWithPromises = (req, res) => {
    getUserID(req.query.userID).then((user) => {
        console.log(user);
        return getProfByID(user[0].profession_id)
    }).then((profession) => {
        res.status(200).send({profession : profession});
    }).catch((err) => {
        console.log(err);
    })
}

const getUsersByAsyncAwait = async (req, res) => {
    try{
        let allUsers = await getAllUsersAsync();
        res.status(200).send({users: allUsers})
    }catch (err){
        console.log(err);
    }
}

const getProfessionByIDWithAsyncAwait = async (req, res) => {
    try{
        let userAwait = await getUserID(req.query.userID);
        let professionAwait = await getProfByID(userAwait[0].profession_id);
        res.status(200).send({profession : professionAwait});
    }catch (err){
        console.log(err);
    }
}

const usersByID = async (req, res) => {
    try{
        let arrayID = req.body.array
        let arrayUsers = [];
        for (let idUser of arrayID){
            arrayUsers.push(await getUserID(idUser));
        }
        res.status(200).send({users : arrayUsers});
    }catch (err){
        res.status(500).send(err);
    }
}

const usersByIDPromiseAll = async (req, res) => {
    try{
        let arrayID = req.body.array
        let arrayUsers = [];
        let arrayPromises = arrayID.map((userID) => {
            return getUserID(userID)
        })
        console.log(arrayPromises);
        arrayUsers = await Promise.all(arrayPromises);
        res.status(200).send({users : arrayUsers});
    }catch (err){
        res.status(500).send(err);
    }
}

module.exports = {getUsers, getUserByID, getProfessionByUser, 
    getUserWithPromises, getProfessionByUserWithPromises,
    getUsersByAsyncAwait, getProfessionByIDWithAsyncAwait,
    usersByID, usersByIDPromiseAll};