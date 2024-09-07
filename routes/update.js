const express = require('express')
const db = require("../db/queries")

const updateRouter = express.Router()

updateRouter.get('/:name', async (req, res) => {
    const fruitName = req.params.name
    const fruit = await db.getFruitByName(fruitName)
    res.render('update', {fruit: fruit})
})

updateRouter.post('/:name', async (req, res) => {
    const fruitData = req.body
    await db.updateFruitById(fruitData)
    res.redirect('/')    
})

module.exports = updateRouter;