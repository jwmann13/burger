const express = require('express');

let router = express.Router();

let model = require('../models/burger_model')



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
    // console.log('2', req.body);

    model.insertOne([ req.body.burger_name, req.body.devoured ], (data) => {
        res.json(data)
    })
})

router.put("/api/burgers/:id", (req, res) => {
    model.updateOne('devoured', 'id', req.params.id, req.body.devoured);
})

router.delete("/api/burgers/:id", (req, res) => {
    model.deleteOne('id', req.params.id)
})

module.exports = router;