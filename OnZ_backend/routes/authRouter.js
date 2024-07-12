const { Router } = require("express");
const { createNewUser, userLogin, retrieveUserByID, authenticateToken } = require("../controllers/authController");

const router = Router();

router.post('/', authenticateToken);

router.post('/user', createNewUser);

router.post('/login', userLogin);

router.get('/user/:id', retrieveUserByID)


module.exports = router;