const express =require('express')
const path=require('path')
const morgan=require('morgan')
const mysql =require('mysql2')
const myconection=require('express-myconnection')
const app =express()

//import routes
const alumnosRoutes = require('./routes/alumnos')
//settings
app.set('port',process.env.PORT ||3000)
app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'))

//middlewares
app.use(morgan('dev'))
app.use(myconection(mysql, {
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'academiaavanza'
},'single'))
app.use(express.urlencoded({extended:false}))

//routs
app.use('/',alumnosRoutes)

//static files
app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'), ()=>{
    console.log('server port 3000')
})