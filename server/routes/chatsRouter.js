const { Router } = require('express');
const chatsRouter = Router();
const userAuthController = require('../controllers/userAuthController.js');
const chatsController = require('../controllers/chatsController.js');

//chats
// chatsRouter.get('/:user/chats', eventsController.getChatList, (req, res) => {
//     res.status(200).json(res.locals.chatList) //send chatList
// })

// chatsRouter.get('/:user/chats/',eventsController.getChatList, (req,res) =>{
//     res.status(200).json(res.locals.chat)
// })

chatsRouter.get('/:eventId', userAuthController.authenticateJWT, chatsController.getChatLog, (req,res) =>{
  res.status(200).json(res.locals.chat)
})

chatsRouter.post('/:eventId', userAuthController.authenticateJWT, chatsController.postMessage, (req,res) =>{
  res.status(200).json(res.locals.chat)
})

module.exports = chatsRouter;