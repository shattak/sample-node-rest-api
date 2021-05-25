const mongoose = require("mongoose");

const _model = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // mongoose.Types.ObjectId(),
});

module.exports = mongoose.model("_model", _model);
