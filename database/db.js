var mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const URI = require('../config/keys.js').mongoURI;
mongoose.connect(URI, ({ useUnifiedTopology: true }));

var dealSchema = mongoose.Schema({
  img_url: {type: String, trim:true, unique: true},
  title: {type: String, trim:true, unique: true}
});

var Deal = mongoose.model('Deal', dealSchema);

module.exports.Deal=Deal;