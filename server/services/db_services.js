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
    //some form of data validation I guess ¯\_(ツ)_/¯
    await pool.query(`INSERT INTO post (title, author, content, posted_on) 
                      VALUES($1, $2, $3, $4)`,
                      [post.title, post.author, post.content, post.posted_on]);
};

module.exports.updatePost = async (post) => {
    await pool.query(`UPDATE post
                      SET title = $1,
                          author = $2,
                          content = $3
                      WHERE post_id = $4`,
                      [post.title, post.author, post.content, post.post_id])
};