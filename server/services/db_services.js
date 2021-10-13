const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'postgres',
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

module.exports.getPost = async () => {
    return (await pool.query('SELECT * FROM post')).rows
};

module.exports.addPost = async (post) => {
    await pool.query('INSERT INTO post (title, author, content, posted_on) VALUES($1, $2, $3, $4)',
                    [post.title, post.author, post.content, post.posted_on]);
};