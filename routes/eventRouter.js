const { Router } = require("express");
const { getAllEvents,
    getEventByID,
    findEventsByFilter } = require("../controllers/eventController");

const router = Router();

router.get('/allEvents', getAllEvents);

router.get('/oneEvent', getEventByID);

router.get('/findEvents', findEventsByFilter);