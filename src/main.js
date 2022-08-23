const express = require('express')
const router = express.Router()
const app = express()
const path= require('path')
const morgan = require('morgan')
const fs= require('fs')
require('dotenv').config()
const PATH= __dirname
const PORT = process.env.PORT


// const homePath = path.basename(__dirname)
// console.log(homePath)

//Paths
fs.readdirSync(PATH).filter((files)=>{
    if(files !=='main.js'){
        console.log(`App: ${files} is using ./${files}/routes`)
        app.use(`/${files}`, require(`./${files}/routes/index`))
    }
})
//Routes
//app.use('/blog', require('./blog/routes/index'))
app.use('/', require('./core/routes/home'))

//Middleware

app.use(morgan('dev'))
app.use(express.json())

app.set('port', PORT || 5000)
app.listen(PORT, ()=>{{
    console.log(`Server running on port ${PORT}`)
}})