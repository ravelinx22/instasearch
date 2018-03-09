var path = require("path");
var router = require("express").Router();
var testRouter = require("./test");
var fightRouter = require("./fights");

// API
router.use("/api/tests", testRouter);
router.use("/api/fights", fightRouter);

// WEBAPP
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
});

module.exports = router;
