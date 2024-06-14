const Events = require("../models/eventModel");

// GET endpoint to retrieve a list of all Events
const getAllEvents = async (req, res) => {
    // Query the DB for a list of all tasks
    const allEvents = await Events.find({});
  
    // Respond to the user
    return res.status(200).json(allEvents);
  };

// GET endpoint to retrieve event by ID
const getEventByID = async (req, res) => {
// Query the DB for tasks where done is true
    const { eventID } = req.params;

    try{
        const eventByID = await Events.findOne({
            _id: eventID
        })
        if(!eventByID) {
            return res.status(404).json({message: 'Event not found'});
        }

        res.status(200).json(eventByID);
    } catch(error){
        console.error(error);
        res.status(500).json({message:'Internal Server Error'});
    }
    };

// GET endpoint to retrieve a list of events that fulfil the filter
const findEventsByFilter = async (req, res) => {
    const {budget, category, datetime, location} = req.query;

    const query = {};

    if(budget){
        query.budget = {$lte:parseFloat(budget)};
    }
    if(category){
        query.category = category;
    }
    if(location){
        query.location = location;
    }
    if(date){
        
    }
  }