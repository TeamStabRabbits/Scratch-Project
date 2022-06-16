const express = require('express');
const usersRouter = express.Router();
const userAuthController = require('../controllers/userAuthController.js');
const usersController = require('../controllers/usersController.js');


usersRouter.post('/signup', usersController.createUser, (req,res)=>{
    res.status(200).json("User created")
})


usersRouter.post('/login', usersController.getUser, userAuthController.setJWT, (req, res) =>{
    res.status(200).json(res.locals.user)
})


usersRouter.post('/update'), usersController.updateUser, (req, res) => {
    res.status(200).json(res.locals.user)
}

module.exports = usersRouter;