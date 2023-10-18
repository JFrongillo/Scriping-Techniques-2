const mongoose = require('mongoose');
const Db = process.env.DB_URL;

module.exports = () => {
    mongoose.connect(Db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected with Mongoose...'))
    .catch(err => console.log(err));
}
