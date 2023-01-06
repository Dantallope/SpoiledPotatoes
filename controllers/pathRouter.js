const {Router} = require("express");
const jwt = require('jsonwebtoken');
const pathRouter = new Router();

pathRouter.get('/', (req, res) => {
    const { logintoken } = req.cookies;

    try{
    const data = jwt.verify(logintoken, process.env,JWT_KEY);
    console.log(data);
    res.render("landing");
    }catch (error){
        console.log(error.message);
        res.end();
    }
});

pathRouter.get('/login', (req, res) => {
    res.render("login");
});

pathRouter.get('/users', (req, res) => {
    res.render("users");
});

pathRouter.get('/infopage', (req, res) => {
    res.render("infopage");
});
module.exports = pathRouter;