const express = require('express');

const db = require("../data-model/data-model")

const router = express.Router();

router.get("/", (req, res) => {
    db.find()
    .then(user => {
        res.json(user)
    }).catch(err => {
        res.json(err)
    })
})


module.exports = router