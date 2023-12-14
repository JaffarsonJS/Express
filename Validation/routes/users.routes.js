const express = require('express');

let {
    login,
    signup
} = require("../controller/users.controller")

let router = express.Router()

router.post("/signup",signup)
router.get("/login",login)