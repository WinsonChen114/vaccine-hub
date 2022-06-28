const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(cors())
//Parse incoming request bodies with JSON payloads
app.use(express.json())
//log request info
app.use(morgan("tiny"))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {console.log("🍣 Server running on http://localhost:"+PORT)})