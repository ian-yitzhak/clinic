const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const path = require('path');
const bodyParser = require('body-parser');
const app = express()


const db = require('./db/db')





const indexRouter  = require('./routes/index')





app.set("view engine" , "ejs")
app.set('views', path.join(__dirname, "views"));

app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static('public'))




//bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))





app.use('/',  indexRouter)




const port =process.env.PORT || 5000;
app.listen(port, ()=> console.log(`app running on ${port}`))