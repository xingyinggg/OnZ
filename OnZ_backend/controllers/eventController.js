const Events = require("../models/eventModel");
const Stations = require("../models/stationModel");

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

    try {
        const eventByID = await Events.findOne({
            _id: eventID
        })
        if (!eventByID) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json(eventByID);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const retrieveStation = async (req, res) => {
    // Query the DB for a list of all tasks
    const allStations = await Stations.find({});

    // Respond to the user
    return res.status(200).json(allStations);
};

const getEventByCategory = async (req, res) => {
    // Query the DB for tasks where done is true
    const { category } = req.params;

    try {
        const eventByCategory = await Events.find({
            category: category
        });
        if (!eventByCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(200).json(eventByCategory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// GET endpoint to retrieve a list of events that fulfil the filter
const findEventsByFilter = async (req, res) => {
    const {
        selectedCategories,
        selectedBudget,
        selectedStations,
        selectedChoice,
        selectedNumberOfActivities,
    } = req.body;

    // Create an empty query object
    const query = {};

    // Add budget condition to the query if budget is provided
    // 30
    if (selectedBudget.length > 0) {
        query.upperPriceRange = { $lte: Math.max(...selectedBudget.map(b => parseFloat(b))) };
    }

    // Add category condition to the query if categories are provided
    if (selectedCategories && selectedCategories.length > 0) {
        query.category = { $in: selectedCategories.map(category => category.toLowerCase()) };
    }

    // Add location condition to the query if stations are provided
    if (selectedStations.length > 0) {
        query.location = { $in: selectedStations.map(station => station.toLowerCase()) };
    }

    // Add date condition to the query if date is provided
    // if (selectedDate) {
    //     const date = new Date(selectedDate);
    //     if (!isNaN(date)) {
    //         query.date = { $gte: date };
    //     }
    // }

    // Add time range condition if start and end times are provided
    // if (selectedTime.start && selectedTime.end) {
    //     query.time = {
    //         $gte: new Date(selectedTime.start),
    //         $lte: new Date(selectedTime.end)
    //     };
    // }

    // You may want to handle other filters (selectedChoice, selectedResultsDate, selectedNumberOfActivities) similarly if they are relevant for your schema

    try {
        // Find events based on the constructed query
        const events = await Event.find(query);
        if (events == null) {
            return res.status(402).json({ err: "No events found." });
        }
        // Return the list of events that fulfill the filter
        return res.status(200).json(events);
    } catch (error) {
        // Handle errors and return a 500 status with the error message
        return res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllEvents,
    getEventByID,
    getEventByCategory,
    findEventsByFilter,
    retrieveStation,
    getEventByCategory
};