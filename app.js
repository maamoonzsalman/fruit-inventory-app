const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,"public")))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const indexRouter = require('./routes/index')
app.use('/', indexRouter)

const fruitRouter = require('./routes/fruit')
app.use('/fruits', fruitRouter)

const updateRouter = require('./routes/update')
app.use('/update', updateRouter)

app.listen(3000)