const express = require('express')
const indexRouter = express.Router()
const db = require("../db/queries")

indexRouter.get('/', async (req, res) => {
    const fruits = await db.getAllFruits()
    res.render('index', {fruits: fruits})
})

module.exports = indexRouter;