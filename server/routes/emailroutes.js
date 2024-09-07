const express = require('express');
const router = express.Router();

const emailID = require('../models/EmailID');

router.post('/subscribe',async (req,res) =>{
    console.log("Insice subscribe");
    const mailID = new emailID({
        name:req.body.name,
        email:req.body.email
    });
    try{
        const newMailID = await mailID.save();
        res.status(201).json(newMailID);
    }catch(err){
        res.status(400).json({message:err.message});        
    }

});

module.exports = router;