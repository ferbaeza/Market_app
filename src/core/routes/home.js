const router = require('express').Router()
const path = require('path')


const path_R =path.parse(__dirname).dir
const appPATH = path_R.split('/').at(-1)





router.get('/', async(req, res)=>{
    res.sendFile(`/${appPATH}/public/index.html}`    );
    // res.json({
    //     status:'200',
    //     response:'Home'

    // })
})

module.exports= router