const express = require('express');
const bcrypt = require("bcryptjs")

const db = require("../data-model/data-model")

const router = express.Router();


router.post("/register", (req, res) => {
    const userData = req.body

    const hash = bcrypt.hashSync(userData.password, 12)
    userData.password = hash

    db.add(userData)
    .then(user => {
        res.json(user)
    }).catch(err => {
        res.json(err)
    })
  })



module.exports = router