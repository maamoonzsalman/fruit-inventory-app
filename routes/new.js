const express = require('express')
const db = require("../db/queries")

const newRouter = express.Router()

newRouter.get('/', (req, res) => {
    res.render('new')
})

newRouter.post('/', async (req, res) => {
    const newFruitData = req.body
    console.log('newFruitdata', newFruitData)
    await db.addFruit(newFruitData)
    res.redirect('/')
})

module.exports = newRouter;