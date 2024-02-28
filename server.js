import express from "express";
//const express = require("express");
import bodyParser from "body-parser";
//const dbConfig = require("./config/db.config.js");
import DB from "./config/db.config.js";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import loginRouter from "./routes/login.router.js";
import forgotRouter from "./routes/forgot.router.js";
import resetRouter from "./routes/reset.router.js";
import employeeRouter from "./routes/employee.route.js";
//const mongoose = require("mongoose");

//const bodyParser = require("body-parser");
// create express app
const app = express(); 
// Setup server port

const port = process.env.PORT || 4000;
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// Configuring the database

mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect(DB.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database.", err);
    process.exit();
  });
// Require Users routes
//const userRoutes = require("./routes/user.routes");
//const loginRoutes = require("./routes/login.routes");
// using as middleware
 app.use("/api/v1", userRoutes);
 app.use("/api/v1/user", loginRouter);
 app.use("/api/v1/forgot", forgotRouter);
 app.use("/api/v1/reset", resetRouter);
 app.use("/api/v1/emp", employeeRouter);

// define a root/default route
// app.get("/", (req, res) => {
//   res.json({ message: "Hello World" });
// });
// listen for requests
app.listen(port, () => {
  console.log(`Node server is listening on port ${port}`);
});
