const { Router } = require("express");
const { createNewRoom, joinRoom } = require("../controllers/roomController");

const router = Router();

router.post('/create', createNewRoom);
router.post('/join', joinRoom)


module.exports = router;