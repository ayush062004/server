const express = require('express');
const subject = require('../models/subject');
const router = express.Router();

router.post('/',async(req,res)=>{
const result = await new subject(req.body);
result.save();
return res.json({message:"subject Added Successfully"});

})

router.get('/',async(req,res)=>{
    const result = await subject.find();
    return res.json(result)
});

router.delete('/:id',async(req,res)=>{

    const result = await subject.findByIdAndDelete(req.params.id);
    return res.json({message:"subject Deleted Successfully"});
})

router.put('/',async(req,res)=>{
const result=await subject.findByIdAndUpdate(req.params.id,req.body)
return res.json({message:"subject updated"})

})

module.exports = router;