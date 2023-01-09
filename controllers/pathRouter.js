const {Router} = require("express");
const jwt = require('jsonwebtoken');

const User = require('../models/user')

const pathRouter = new Router();

pathRouter.get('/', async (req, res) => {
    const { logintoken } = req.cookies;

    try{
   const data = jwt.verify(logintoken, process.env.JWT_KEY);
   const {id} = data

   const user = await User.findByPk(id);
   const simpleUser = user.get({ plain:true})


    res.render("landing", {
        user: simpleUser,
    });
    }catch (error){
        if (error.message === "invalid token" || error.message === "jwt must be provided"){
            res.redirect('/login')
        }else{
            res.status(500).end("Hmmm")
        }
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

pathRouter.get('/ranking', (req, res) => {
    res.render("ranking");
});

pathRouter.get('/librarypage', (req, res) => {
    res.render("librarypage");
});
module.exports = pathRouter;