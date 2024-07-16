const { Router } = require("express");
const {
    retrieveStation } = require("../controllers/eventController");

const router = Router();

router.get("/station", retrieveStation)

module.exports = router;