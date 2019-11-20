const express = require('express');

let router = express.Router();

let model = require('../models/burger')



router.get("/", (req, res) => {
    res.render("index")
});

router.get("/api/burgers", (req, res) => {
    
})

router.post("/api/burgers", (req, res) => {

})

module.exports = router;