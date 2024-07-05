const { Router } = require("express");
const { createNewUser, userLogin, retrieveUserByID } = require("../controllers/authController");

const router = Router();

router.post('/user', createNewUser);

router.post('/login', userLogin);

router.get('/user/:id', retrieveUserByID)


module.exports = router;