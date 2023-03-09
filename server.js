require("dotenv").config();
const path = require('path')
const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');


//const sequelize = require('./config/connection')
const mainRouter = require("./controllers")

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/css/styleLoginPage.css', (req, res) => {
  res.type('text/css');
  res.sendFile(path.join(__dirname, 'public', 'css', 'styleLoginPage.css'));
});

app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

app.use(mainRouter);


  app.listen(PORT, () => { console.log('Now listening')
});

