const express = require('express');
const session = require('../models/session');
const router = express.Router();

router.post('/',async(req,res)=>{
const result = await new session(req.body);
result.save();
return res.json({message:"Session Added Successfully"});

})

router.get('/',async(req,res)=>{
    const result = await session.find();
    return res.json(result)
});

router.delete('/:id',async(req,res)=>{

    const result = await session.findByIdAndDelete(req.params.id);
    return res.json({message:"Session Deleted Successfully"});
})

router.put('/',async(req,res)=>{
const result=await session.findByIdAndUpdate(req.params.id,req.body)
return res.json({message:"session updated"})

})

module.exports = router;