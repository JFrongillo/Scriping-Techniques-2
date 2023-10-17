const { MongoClient } = require('mongodb');
const Db = process.env.DB_URL;

const client = new MongoClient(Db);

module.exports = () =>{
    client.connect(process.env.DB_URL)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
}