//mongodb connection
const mongoose = require('mongoose');

function mongooseConnectDB(uri){
mongoose.connect(uri,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
})
.then((result)=>console.log("MongoDB connected"))
.catch((err)=>console.log(err));
}

module.exports = mongooseConnectDB;