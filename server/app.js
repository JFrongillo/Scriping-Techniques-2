/**
 * @fileoverview This file is the entry point for the backend server.
 */

//Imports
const express = require('express');
const env = require('dotenv');
const dbConnection = require('./db/mongo');
const app = express();
const port = 3000;

//Routes
const customerRoutes = require('./routes/customerRoutes');



//Middleware
env.config();
dbConnection();
app.use(express.json());
app.use("/api/customer", customerRoutes);
app.get("/api/", (req, res) => {
    res.send("THIS IS WORKING");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});