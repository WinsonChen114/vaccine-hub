require("dotenv").config()
require("colors")

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001

function getDatabaseUri()
{
    const dbUser = process.env.DATABASE_USER || "postgres"
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "postgres"
    const dbHost = process.env.DATABASE_HOST || "localhost"
    const dbPort = process.env.DATABASE_PORT || "5433"
    const dbName = process.env.DATABASE_NAME || "vaccine_hub"

    //If DATABASE_URL environment variable is provided, use that
    //Otherwise, create the db connection string ourselves

    return process.env.DATABASE_URL || "postgresql://"+dbUser+":"+dbPass+"@"+dbHost+":"+dbPort+"/"+dbName
}

console.log("Vaccine Hub Config:".red)
console.log("PORT:".cyan, PORT)
console.log("DATABASE URI:".cyan, getDatabaseUri())
console.log("---")

module.exports = {
    PORT,
    getDatabaseUri
}
