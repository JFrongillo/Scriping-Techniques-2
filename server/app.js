/**
 * @fileoverview This file is the entry point for the backend server.
 */

//Imports
const express = require('express');
const env = require('dotenv');
const dbConnection = require('./db/mongo');
const app = express();
const port = 3000;


//Middleware
env.config();
dbConnection();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});