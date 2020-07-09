const express = require('express');
const bcrypt = require("bcryptjs")

const db = require("../data-model/data-model")

const router = express.Router();

router.post("/login", (req, res) => {
    const { username, password} = req.body

    db.findBy({username})
    .then(([user]) => {
        if(user && bcrypt.compareSync(password, user.password)) {
            
            req.session.user = {
                id: user.id,
                username: user.username
            }

            res.status(200).json({Hello: user.username})
        } else {
            res.status(401).json({message: "invalid credentials"})
        }
    })
    .catch(err => {
        res.status(500).json({message: "error finding the user"})
    })

  })




module.exports = router