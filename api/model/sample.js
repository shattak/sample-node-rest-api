
const mongoose = require("mongoose");

const sample = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,

});

module.exports = mongoose.model("sample", sample);
