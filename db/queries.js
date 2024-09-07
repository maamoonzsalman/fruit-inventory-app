const pool = require('./pool')

async function getAllFruits() {
    const { rows } = await pool.query("SELECT * FROM fruits")
    return rows
}

module.exports = {
    getAllFruits
}