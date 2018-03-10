const mongoose = require("mongoose");

const FightSchema = new mongoose.Schema({
  name: String,
  tags: [{
	  name: String,
	  count: Number
  }]
}, 
 { timestamps: {} }
);

module.exports = mongoose.model("Fight", FightSchema);
