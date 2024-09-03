//mongodb connection

mongoose.connect('mongodb://AdminAnkit:admin2024@127.0.0.1:27017/Blogdb',
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,
    'MongoDB connection error:'
));

db.once('open',()=>{
    console.log("Connected to mongodb");
});

