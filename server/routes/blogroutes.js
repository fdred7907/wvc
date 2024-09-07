const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

//get all posts
router.get('/posts',async (req,res) =>{
    try {
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
});

//post new posts
router.post('/posts',async (req,res) =>{
    const post = new Post({
        title:req.body.title,
        content:req.body.content
    });
    try{
        const newPost = await post.save();
        res.status(201).json(newPost);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

//update post
router.put('/posts',async (req,res)=>{
    try{
        const updatedPost = await Post.findByIdAndUpdate(req.params.id,
            {
                title:req.body.title,
                content:req.body.content,
                updatedAt:Date.now()
            },{new:true});
            res.json(updatedPost);
    }catch(err){
        res.status(400).json(
            {
                message:err.message
            }
        )
    }
})


//deleted post
router.delete('/posts/:id',async(req,res)=>{
    try{
        await Post.findByIdAndDelete(req.params.id);
        res.json({message:"Post deleted"});
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
});


module.exports = router;

