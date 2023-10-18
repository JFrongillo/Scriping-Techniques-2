const mongoose = require('mongoose');
const express = require('express');
const route = express.Router();
const Customer = require('../models/customer');

// GET all customers
route.get('/', async(req,res) => {
    const response = await Customer.find();
    return res.json(response);
}); 

route.post('/new_customer', async(req,res) => {
    //deconstructing the request body
    const {name, company, email, problem_description} = req.body;
    try{
        //Making a new customer object
        const newCustomer = { 
                name: name,
                company: company,
                email: email,
                problem_description: problem_description
        }
        //Saving the new customer object to the database
        const response = await Customer.create(newCustomer);
        //Sending the response back to the client
        return res.status(200).json(response);
    } catch(err){
        //If there is an error, send the error back to the client
        return res.status(404).json(err);
    }
})





module.exports = route; 




