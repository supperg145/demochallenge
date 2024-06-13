const express = require("express");
const routes = require("./config/routes");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

//initializing express app with PORT
const app = express();




app.use(morgan("dev"));
//connect styling to the file
app.use("/public", express.static("public"));
//parsing incoming data from form to an object
app.use(express.urlencoded({ extended: true }));
//set the view engine as ejs to be able to show ejs code
app.set("view engine", "ejs");
//tell the server where to find routes
app.use(routes)
//start the server
const dbURI = "mongodb+srv://gabor1415:r5fLIzTQAwC6kck8@demochallenge.y0dztfg.mongodb.net/?retryWrites=true&w=majority&appName=demochallenge";
mongoose
  .connect(dbURI)
  .then((result) =>
    app.listen("2000", () => console.log(`App is listening on`))
  )
  .catch((err) => console.log(err));