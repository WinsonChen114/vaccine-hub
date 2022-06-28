const { UnauthorizedError } = require("../utils/errors")
const db = require("../db")

class User{
    static login(credentials)
    {
        //Submit email and password
        //If any fields are missing, throw an error

        //Look up user in db
        //If user found, compare submitted password with password in db
        //If there is a match, submit user
        //If error, throw an error
        throw new UnauthorizedError("Invalid credentials, please try again")
    }

    static register(credentials)
    {
        //User should submit email, password, rsvp status, and number of guest
        //If any fields are missing, throw an error

        //Make sure no user already exists in the db with that email
        //If there is, throw an error

        //Take user's password and hash it
        //Take user's email and loercase it
        //Create a new user in db with all their info and return user
    }
}

module.exports = User