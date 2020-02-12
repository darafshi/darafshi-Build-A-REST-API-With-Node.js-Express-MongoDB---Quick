const express = require('express')
const router = express.Router()
const Subscriber = require('../models/subscriber')

// getting all
router.get('/',async (req , res)=>{
    try{
        const subscribers =await Subscriber.find()
        res.json(subscribers)
    }
    catch(err){res.status(500).json({message:err.message})}
    // 500: there is an error on server
})
//getting one
router.get('/:id', (req , res)=>{
    res.send(req.params.id)
})
// creating one
router.get('/', (req , res)=>{
    
})

// updating one
router.patch('/', (req , res)=>{
    
})
// deleting one
router.delete('/:id', (req , res)=>{
    
})

module.exports=router

