const express = require('express')
const router = express.Router()

// getting all
router.get('/', (req , res)=>{
    res.send('hello World')
})
//getting one
router.get('/:id', (req , res)=>{
   // req.param.id
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

