const express = require('express');
const session = require('express-session')

const loginRouter = require("./routers/auth-login-router")
const registerRouter = require("./routers/auth-register-router")
const logoutRouter = require("./routers/auth-logout-router")
const usersRouter = require("./routers/users-router")
const restricted = require("./middlewares/restricted-middleware")

const server = express();

const sessionConfig = {
    name: "monster",
    secret: "keep it secret, keep it safe!",
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
}

server.use(session(sessionConfig))
server.use(express.json());
server.use('/api/auth-users', loginRouter, registerRouter, logoutRouter);
server.use('/api/users', restricted, usersRouter);


server.use("/", (req, res) => {
    res.json("API is running, welcome!!")
})

module.exports = server;