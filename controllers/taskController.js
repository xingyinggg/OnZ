const express = require('express');

const router = express.Router();

const homePage = (req, res, next) => {
    res.write('<html><h1> Welcome to OnZ</h1></html>');
}

const loginPage = (req, res, next) => {
    res.write('<html><h1>Login here page</h1></html>');
}

const register = (req, res, next) => {
    res.write('<html><h1>Register here page</h1></html>');
}

module.exports = {
    homePage,
    loginPage,
    register
}