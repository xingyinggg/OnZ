const express = require('express');
const { homePage, loginPage, register } = require("../controllers/taskController");

const router = express.Router();

router.get('/login-page', loginPage);

router.get('/register', register);

router.get('/', homePage);


module.exports = router;