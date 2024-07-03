const { Router } = require("express");
const { addVotes, getVotes } = require("../controllers/roomEventController");

const router = Router();

router.get('/roomEvents/getVotes', getVotes);

router.post('/roomEvents/addVotes', addVotes);

module.exports = router;