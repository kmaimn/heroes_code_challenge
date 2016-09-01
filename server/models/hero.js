var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroesSchema = new Schema({
  alias: { type: String, required: true },
  first_name: String,
  last_name: String,
  city: String,
  power_name: String
});

var Hero = mongoose.model('Hero', heroesSchema);

module.exports = Hero;
