const express = require('express');
const bcrypt = require("bcryptjs")

const db = require("../data-model/data-model")

const router = express.Router();

router.get("/logout", (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                res.json({message: "Can't log out!"})
            } else {
                res.json({message: "Logged out successfully!"})
            }
        })
    }
})


module.exports = router