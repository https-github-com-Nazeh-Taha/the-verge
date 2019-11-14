var mongoose = require("mongoose");

const RecomSchema = mongoose.Schema({
  title: String,
  img_url: String
});

module.exports = mongoose.model("articles", RecomSchema);
