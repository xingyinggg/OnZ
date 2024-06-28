const { Router } = require("express");
const { createNewUser, userLogin } = require("../controllers/authController");

const router = Router();

router.post('/user', createNewUser);

router.post('/login', userLogin);


module.exports = router;