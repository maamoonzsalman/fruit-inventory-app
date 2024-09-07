const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

const indexRouter = require('./routes/index')
app.use('/', indexRouter)

app.listen(3000)