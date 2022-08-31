const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/userinformation");
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database is connected"));

const UserRouter = require("./routes/user");

app.use("/user", UserRouter);

app.listen("8080", () => {
    console.log("Server is started");
});