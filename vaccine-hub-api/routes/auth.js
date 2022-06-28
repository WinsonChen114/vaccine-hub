const express = require("express")
const router = express.Router()

router.post("/login", async (request, response, next) => {
    try {
        //Taking user's email and password and attemtping to authenticate them
    }
    catch (err) {
        next(err)
    }
})

router.post("/register", async (request, response, next) => {
    try {
        //Taking user's email, password, rsvp status, and the number of guests
        //and create a new user in database
    }
    catch (err) {
        next(err)
    }
})

module.exports = router