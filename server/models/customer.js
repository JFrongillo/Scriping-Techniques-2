const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({
    name: String,
    company: String, 
    email: String,
    problem_description: String,
});

module.exports = mongoose.model('Customer', customerSchema);
    