const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'postgres',
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

module.exports.getPost = async () => {
    // pool.query('SELECT * FROM post', (err, res) => {
    //     console.log(res); 
    // });
    return await (await pool.query('SELECT * FROM post')).rows
}