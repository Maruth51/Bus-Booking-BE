var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CitySchema = new Schema({
  City: { type: String, required: true },
  Distric: { type: String },
  State: { type: String }
});

//Export model
module.exports = mongoose.model("city", CitySchema);
