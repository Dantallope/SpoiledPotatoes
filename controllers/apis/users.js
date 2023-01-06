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

    if (user.password !== password) {
        res.status(401).end('Stinky Password');
        return;
    }

    res.end();
});

usersRouter.post('/', async (req,res) => {
    const {email, password} = req.body;

    const user = await User.findOne({where: {
        email,
    }});

    if (user) {
        res.status(404).end("Email already in use");
        return;
    }

    const newUser = await User.create({
        email,
        password,
    });

    res.status(200).json({
        id: newUser.id,
    })
})

module.exports = usersRouter;