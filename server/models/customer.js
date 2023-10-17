import mongoose from 'mongoose';
const { Schema } = mongoose;

const customerSchema = new Schema({
    name: String,
    company: String, 
    email: String,
    problem_description: String,
});

export default mongoose.model('Customer', customerSchema);
    