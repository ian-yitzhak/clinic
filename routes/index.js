const express = require('express')
const router = express.Router()
const Clinic = require('../models/Clinic')


router.get('/',async (req,res)=>{
res.render('home')
	
})

router.get('/new',async (req,res)=>{
res.render('new')
	
})
router.post('/new',async (req,res)=>{
const clinic = new Clinic({

name: req.body.name,
age: req.body.age,
description: req.body.description,
medicine: req.body.medicine,
payment: req.body.payment


})
try{
await clinic.save()
res.redirect('/')
}catch(e){
console.log(e)
}    
})
router.get('/response',async (req,res)=>{
  try{
        const clinic = await Clinic.find().sort({$natural:-1})
        res.render('response', {clinic:clinic})
    }
    catch(e){
        console.log(e)
    }
    
})



module.exports = router;