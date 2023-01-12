const express = require("express")
const cors = require("cors")
const PORT = 2000
const server = express()
const db = require("./models")
const dotenv = require("dotenv")
const cookieParser = require ("cookie-parser")

dotenv.config()
server.use (express.json())
server.use (cors())
server.use(cookieParser())

const { user } = require("./routers");
server.use("/users", user);

server.listen(PORT, () => {
    // db.sequelize.sync({ alter: true });
    console.log("Success Running at PORT: " + PORT);
});
