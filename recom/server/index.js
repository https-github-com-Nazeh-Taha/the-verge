var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mongoose = require("mongoose");

require("dotenv").config();
const port = process.env.PORT || 3003;

var app = express();

app.use(express.static(__dirname + "/../public"));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.URI, { useUnifiedTopology: true });

var db = mongoose.connection;

db.on("error", () => {
  console.log(" error occurred from the database");
});
db.once("open", () => {
  console.log(" successfully opened the database");
});

app.get("/", (req, res) => {});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../public"));
});
app.listen(port, function() {
  console.log(`listening on port ${port}!`);
});
