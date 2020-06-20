var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BusSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  schedule: { type: Array, default: [] },
  time: { start: { type: Date }, end: { type: Date } },
  fare: { type: String },
  rating: { type: String },
  seat : {type:Array ,default:[]}
});

//Export model
module.exports = mongoose.model("Bus", BusSchema);
