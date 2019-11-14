var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");
var cors = require("cors");
var RecomModel = require("../models/recom-model");

require("dotenv").config();
const port = process.env.PORT || 3003;
var app = express();

// Middlewares:
app.use(cors());
app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection:
mongoose.connect(process.env.URI, { useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", () => {
  console.log(" error occurred from the database");
});
db.once("open", () => {
  console.log(" successfully opened the database");
});

// Routes:
app.get("/:id", (req, res) => {
  const id = req.params.id;
  console.log("inside id route");

  RecomModel.findById(id)
    .then(data => {
      console.log("inside then route");
      var type = data;
      console.log(data);
      res.send(data);
    })
    .catch(err => console.log("Error : " + err));
});

app.get("*", (req, res) => {
  console.log("inside main route");
  res.sendFile(path.join(__dirname + "../public"));
});

// Run the server:
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});
