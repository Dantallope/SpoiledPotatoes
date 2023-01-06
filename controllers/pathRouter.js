const {Router} = require("express");

const pathRouter = new Router();

pathRouter.get('/', (req, res) => {
    res.render("landing");
});

pathRouter.get('/login', (req, res) => {
    res.render("login");
});

pathRouter.get('/users', (req, res) => {
    res.render("users");
});

module.exports = pathRouter;