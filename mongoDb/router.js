const express = require('express');
const app = express.Router();
const Controller = require('./controller');
app.post("/insertData",Controller.insertData);