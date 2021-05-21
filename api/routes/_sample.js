
const express = require("express");
const router = express.Router();


// POST _sample
const _sample = require("../controller/_sample");
router.post("/sample", _sample.post_sample);




module.exports = router;