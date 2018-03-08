var router = require("express").Router();
var Test = require("../models/test");

router.get("/", function(req, res) {
	Test.find({}, function(err, docs) {
		if(err) throw err;

		res.json(docs);
	});
});

module.exports = router;

