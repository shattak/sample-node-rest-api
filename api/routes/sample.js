
const express = require("express");
const router = express.Router();


// POST sample
const sample = require("../controller/sample");
router.post("/sample", sample.post_sample);




module.exports = router;