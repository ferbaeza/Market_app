const express = require('express')
const router = express.Router()
const app = express()
const path= require('path')
const morgan = require('morgan')
const fs= require('fs')
require('dotenv').config()
const PATH= __dirname
const PORT = process.env.PORT



//Paths
fs.readdirSync(PATH).filter((files)=>{
    if(files !=='main.js' && files!=='public' ){
        console.log(`App name is ${files}`)
        app.use(`/${files}`, require(`./${files}/routes/index`))
    }
})

//Static Files
app.use(express.static(path.join(__dirname,'public')));

//Routes
//app.use('/blog', require('./blog/routes/index'))
app.use('/', require('./core/routes/home'))

//Middleware

app.use(morgan('dev'))
app.use(express.json())

app.set('port', PORT || 5000)
app.listen(PORT, ()=>{{
    console.log(`\n###  ###  ###\n##   #    ##\n#    ###  # #\n\nServer running on port ${PORT}`)
}})