const express = require('express');

let router = express.Router();

let model = require('../models/burger')



router.get("/", (req, res) => {
    model.selectAll((data) => {
        let hbsObj = {
            burgers: data
        }
        res.render("index", hbsObj)
    })
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

router.put("/api/burgers/:id", (req, res) => {
    model.insertOne("burgers", req.body.burger_name, console.log)
})

router.delete("/api/burgers/:id", (req, res) => {
    model.d
})

module.exports = router;