const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title:String,
    content:String,
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{type:Date}
});

const Post = mongoose.model('Post',postSchema);
module.exports = Post;

