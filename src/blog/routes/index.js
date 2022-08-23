const express = require('express');
const router = express.Router();
const fs = require('fs');
const path= require('path')

const PATH_ROUTES=  __dirname;

const path_R =path.parse(__dirname).dir
const t = path_R.split('/').at(-1)



const removeExtension=(fileName)=>{
    return fileName.split('.').shift()
};



fs.readdirSync(PATH_ROUTES).filter((file)=>{
    const name = removeExtension(file)
    if (name !== 'index'){
        console.log(`Cargando las rutas de ${t}/${name}`)
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = router
