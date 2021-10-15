const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'postgres',
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
})

module.exports.getPost = async () => {
    return (await pool.query('SELECT * FROM post')).rows;
};

module.exports.addPost = async (post) => {
    //some form of data validation I guess ¯\_(ツ)_/¯
    await pool.query(`INSERT INTO post (title, author, content, posted_on) 
                      VALUES($1, $2, $3, $4)`,
                      [post.title, post.author, post.content, post.posted_on]);
};

module.exports.updatePost = async (postId, post) => {
    await pool.query(`UPDATE post
                      SET title = $1,
                          author = $2,
                          content = $3
                      WHERE post_id = $4`,
                      [post.title, post.author, post.content, postId]);
};

module.exports.deletePost = async (postId) => {
    await pool.query('DELETE FROM post WHERE post_id = $1', [postId]);
};

module.exports.getComments = async () => {
    return (await pool.query('SELECT * FROM comment')).rows;
};

module.exports.addComment = async (postId, comment) => {
    await pool.query(`INSERT INTO comment (post_id, content, author, posted_on)
                      VALUES($1, $2, $3, $4)`,
                      [postId, comment.content, comment.author, comment.posted_on]);
};

module.exports.updateComment = async (commentId, comment) => {
    await pool.query(`UPDATE comment
                      SET content = $1
                      WHERE comment_id = $2`,
                      [commentId, comment.content]);
};

module.exports.deleteComment = async (commentId) => {
    await pool.query(`DELETE FROM comment WHERE comment_id = $1`, commentId);
};