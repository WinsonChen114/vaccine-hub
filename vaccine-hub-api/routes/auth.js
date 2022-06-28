const express = require("express")
const router = express.Router()
const User = require("../models/user")

router.post("/login", async (request, response, next) => {
    try {
        //Taking user's email and password and attemtping to authenticate them
        const user = await User.login(request.body)
        return response.status(200).json({ user })
    }
    catch (err) {
        next(err)
    }
})

router.post("/register", async (request, response, next) => {
    try {
        //Taking user's email, password, rsvp status, and the number of guests
        //and create a new user in database
        const user = await User.register(request.body)
        return response.status(201).json({ user })
    }
    catch (err) {
        next(err)
    }
})

module.exports = router