const router = require('express').Router()


router.get('/', async(req, res)=>{
    
    res.json({
        status:'200',
        response:'Home'

    })
})

module.exports= router