//http://localhost:3001/routes/authRoutes.js

const express = require("express");
const AuthenticationController = require("../controllers/authenticationController");
const router = express.Router();

const authenticationController = new AuthenticationController();

router.post("/", authenticationController.login);

//router.post("/register", authenticationController.CreateRegisterUser);

module.exports = router;
