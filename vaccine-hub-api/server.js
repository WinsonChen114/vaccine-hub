const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const { BadRequestError, NotFoundError } = require("./utils/errors")
const {PORT} = require("./config")
const authRoutes = require("./routes/auth")

const app = express()

app.use(cors())
//Parse incoming request bodies with JSON payloads
app.use(express.json())
//log request info
app.use(morgan("tiny"))

app.use("/auth", authRoutes)

app.use((request, response, next) => {
    return next(new NotFoundError())

})

app.use((error, request, response, next) => {
    const status = error.status
    const message = error.message

    return response.status(status).json({
        error: { message, status }
    })
})

app.listen(PORT, () => { console.log("🍣 Server running on http://localhost:" + PORT) })