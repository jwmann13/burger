const express = require('express');

let router = express.Router();

let model = require('../models/burger')

router.get("/", (req, res) => {
    res.render("index")
});


module.exports = router;