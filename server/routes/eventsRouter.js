const express = require('express');
const eventsRouter = express.Router();
const eventsController = require('../controllers/eventsController.js');
const userAuthController = require('../controllers/userAuthController');

//events
// /events/searchEvents?name=${eventData.name}&location=${eventData.location}`
//, eventsController.addToJoin
eventsRouter.post('/create', eventsController.createEvent, eventsController.addToJoin, (req,res) =>{
    console.log("Event created")

    res.status(200).json(res.locals.joint)
})

//Initial display -- all events at location
eventsRouter.get('/:location', eventsController.getEventsInitial, (req,res) => {
    res.status(200).json(res.locals.events)
})
//Search by location/name -- might need to change how we're getting search params
eventsRouter.get('/search',eventsController.getEventsSearch, (req,res) => {
    res.status(200).json(res.locals.events)
})

//add user to event
eventsRouter.post('/join/:eventId',eventsController.addUserToEvent,(req,res)=>{
    res.status(200).json(res.locals.chat)
})

module.exports = eventsRouter;