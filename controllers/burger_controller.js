const express = require('express');

let router = express.Router();

let model = require('../models/burger')



router.get("/", (req, res) => {
    res.render("index")
});

router.get("/api/burgers", (req, res) => {
    model.selectAll("burgers", (data) => {
        res.json(data);
    })
})

router.post("/api/burgers", (req, res) => {
    console.log('2', req.body);

    model.insertOne([ req.body.burger_name, req.body.devoured ], (data) => {
        res.json(data)
    })
})

router.put("/api/burgers", (req, res) => {
    model.insertOne("burgers", req.body.burger_name, console.log)
})

module.exports = router;