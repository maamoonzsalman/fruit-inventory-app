const express = require('express')
const fruitRouter = express.Router()
const db = require("../db/queries")

fruitRouter.get('/:name', async (req, res) => {
    const fruitName = req.params.name
    const fruit = await db.getFruitByName(fruitName)
    res.render('fruit', {fruit: fruit})
})

module.exports = fruitRouter;
