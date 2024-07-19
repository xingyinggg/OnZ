const { Router } = require("express");
const { getAllEvents,
    getEventByID,
    findEventsByFilter,
    getEventByCategory } = require("../controllers/eventController");

const router = Router();

router.get('/allEvents', getAllEvents);

router.get('/oneEvent/:id', getEventByID);

router.get('/findEvents/:query', findEventsByFilter);

router.get('/category/:category', getEventByCategory);

module.exports = router;