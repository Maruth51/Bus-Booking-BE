var mongoose = require("mongoose");
const Encrypt = require("../services/hash");

var Schema = mongoose.Schema;

var CredentialSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  pwd: { type: String },
  passwordHash: { type: String, required: true }
});

CredentialSchema.virtual("password").set(function(pwd) {
  this.set({ passwordHash: Encrypt.getHashPwd(pwd) });
});
module.exports = mongoose.model("Cread", CredentialSchema);
