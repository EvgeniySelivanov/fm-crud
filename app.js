const express = require('express');
const ThingController = require('./controllers/thing.controller')
const app = express();

app.use(express.json());


//Routing
app.post('/things', ThingController.createThing);
module.exports = app;