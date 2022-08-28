const router = require('express').Router()


router.get('/', async(req, res)=>{
    res.json({
        status:'200',
        response:'Test 2'

    })
})

module.exports= router