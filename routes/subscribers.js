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
router.get('/',async (req , res)=>{
    const subscriber=new Subscriber({
        name: req.body,
        subscribedToChannel: req.body.subscribedToChannel
    })
    try{
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
        // 201: object succesfully created.
    }
    catch(err){
        res.status(400).json({message: err.message})
        // 400: something wrong in user input or server!
    }
})

// updating one
router.patch('/', (req , res)=>{
    
})
// deleting one
router.delete('/:id', (req , res)=>{
    
})

module.exports=router

