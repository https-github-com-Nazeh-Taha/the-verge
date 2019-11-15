var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
var dbDeals = require('./database/db').Deal;

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "/")));


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "the-verge", "/index.html"));
  console.log('hgfhf')
});


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
