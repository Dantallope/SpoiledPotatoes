const { Router } = require('express');

const User = require('../../models/User');

const usersRouter = new Router();

usersRouter.post("/login", async(req,res) => {
    const {email, password} = req.body;

    const user = await User.findOne({where:{
        email,
    }});

    if (!user) {
        res.status(401).end('User not found');
        return;
    }

    res.end();
});

module.exports = usersRouter;