const { BadRequestError, UnauthorizedError } = require("../utils/errors")
const db = require("../db")

class User {
    static async login(credentials) {
        //Submit email and password
        //If any fields are missing, throw an error

        //Look up user in db
        //If user found, compare submitted password with password in db
        //If there is a match, submit user
        //If error, throw an error
        throw new UnauthorizedError("Invalid credentials, please try again")
    }

    static async register(credentials) {
        //User should submit all parameters
        //If any fields are missing, throw an error
        const requiredFields = ["password", "firstName", "lastName", "email", "location", "date"]
        requiredFields.forEach((field) => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError("Missing " + field + " in request body.")
            }
        })

        //Make sure no user already exists in the db with that email
        //If there is, throw an error
        const existingUser = await User.fetchUserbyEmail(credentials.email)
        if (existingUser) {
            throw new BadRequestError("Duplicate email: " + credentials.email)
        }


        //Take user's password and hash it
        //Take user's email and loercase it
        const lowercaseEmail = credentials.email.toLowerCase()
        //Create a new user in the db with all their info and return user
        const result= await db.query(`
        INSERT INTO users(
            password,
            first_name,
            last_name,
            email,
            location,
            date)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING id, first_name, last_name, email, location, date;
        `, [credentials.password, credentials.firstName, credentials.lastName, lowercaseEmail, credentials.location, credentials.date])

        const user = result.rows[0]

        return user
    }

    static async fetchUserbyEmail(email) {
        if (!email) {
            throw new BadRequestError("No email provided")
        }

        const query = "SELECT * FROM users WHERE email = $1"
        const result = await db.query(query, [email.toLowerCase()])

        const user = result.rows[0]

        return user
    }
}

module.exports = User