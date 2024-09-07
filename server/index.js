const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const blogRouter = require('./routes/blogroutes');
const emailRouter = require('./routes/emailroutes');
const db = require('./databases/mongoose.js');

const app = express();
const PORT = process.env.PORT || 5000;

//mongodb connection
db('mongodb://AdminAnkit:admin2024@localhost:27017/Blogdb?authSource=admin');

const corsOptions = {
    origin: [ 'http://localhost:5000', 'http://localhost:3000' ]
};


app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use('/email', emailRouter);
app.use('/', blogRouter);



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
