const mongoose = require('mongoose');
const emailIDSchema = new mongoose.Schema({
    name:String,
    email:String
});

const emailID = mongoose.model('emailID',emailIDSchema);
module.exports = emailID;