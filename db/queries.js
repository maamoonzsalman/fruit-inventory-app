const pool = require('./pool')

async function getAllFruits() {
    const { rows } = await pool.query("SELECT * FROM fruits")
    return rows
}

async function getFruitByName(fruitName) {
    const { rows } = await pool.query(`SELECT * FROM fruits WHERE name = $1`, [fruitName]);
    return rows[0]
}

async function updateFruitById(updatedFruit) {
    const { name, family, f_order, genus, id } = updatedFruit

    const result = await pool.query(
        `UPDATE fruits
        SET name = $1, family = $2, f_order = $3, genus = $4
        WHERE id = $5
        RETURNING *`,
        [name, family, f_order, genus, id]
    );

    return result.rows[0]
}

async function addFruit(fruitData) {
    const {name, family, f_order, genus} = fruitData
    const f_imgs = ''

    const result = await pool.query(
        `INSERT INTO fruits (name, family, f_order, genus, f_imgs)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`, 
        [name, family, f_order, genus, f_imgs]
    );

    return result.rows[0]
}

module.exports = {
    getAllFruits,
    getFruitByName,
    updateFruitById,
    addFruit
}