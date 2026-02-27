const Admin = require('../models/Admin');
const express = require('express');
//console.log(express)
const router = express.Router();

router.get('/', async(req,res)=>{
    return res.json("Api called")
})
router.post('/',async (req,res)=>{
    const reg = await new Admin(req.body)
    reg.save();


    return res.json("Admin Registered Succesfully")
})

router.post('/login',async(req,res)=>{
    const{email,password}=req.body

const admin= await Admin.findOne
({email:email});
if(!admin){
    return res.status(400).json("Admin not found")
}
if (admin.password == password){
    return res.status(200).json
    ({message:"Login Successfully", admin:{
        email:admin.email,
        id:admin._id,
        role:"admin"
    }})
}
})

router.put('/change/:id',async(req,res)=>{
    const{id} = req.params;
    const {op,np,cnp} = req.body;
    const user = await admin.findById(req.params.id);
    if(!user){
        return res.json({message:"detail not matched"})
    }
    if(user.password==op){
return res.json({message:"Your Old password  and New Password are same"})
    } 
    else if(np==cnp){
        try{
            const ex = await admin.findByIdAndUpdate(id,{password:cnp});
            return res.json({message:"Password Updated Successfully"})
        }catch(er){
            console.log(er)
            return res.json({message:"Sorry Try again"})
        }
    }

    
    else{
        return res.json({message:"Your old Password not matched"})
    }
})

//http://localhost:5000/api/admin/login
  module.exports = router