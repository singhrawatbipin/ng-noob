const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const { mongoose } = require('./db');

var eventController = require('./controllers/eventController');

var app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); //<-- you can change this with a specific url like http://localhost:4200
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.listen(3000, () => console.log("Express server started at port number : 3000"));

app.use('/events', eventController);
app.use(cors());