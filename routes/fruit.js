const express = require('express')
const fruitRouter = express.Router()

fruitRouter.get('/:name', (req, res) => {
    res.send('fruit')
})

module.exports = fruitRouter;
