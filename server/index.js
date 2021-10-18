const express = require('express');
const { addPost, updatePost, deletePost, getComments, addComment, updateComment, deleteComment, getCommentsByPost, getPostById, getPosts } = require('./services/db_services');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log(process.env.DB_HOST)

app.get('/api', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/posts', (req, res) => {
    getPosts().then(qry => res.send(qry));
});

app.get('/api/posts/:postid', (req, res) => {
    const postId = req.params.postid;
    getPostById(postId).then(r => res.send(r));
});

app.post('/api/posts', (req, res) => {
    const post = req.body.post;
    try {
        if (post.title == undefined || post.title.trim() < 1) {
            res.send(400);
            return;
        }
        addPost(post).then(() => res.send(200)).catch(err => res.send(500))
    }
    catch {
        res.send(400);
        return;
    }
});

app.put('/api/posts/:postid', (req, res) => {
    const post = req.body.post;
    const postId = req.params.postid;
    try {
        if (post.title == undefined || post.title.trim() < 1) {
            res.send(400);
            return;
        }
        updatePost(postId, post).then(() => res.send(post)).catch(err => res.send(500));
    }
    catch {
        res.send(400)
    }
});

app.delete('/api/posts/:postid', (req, res) => {
    const postId = req.params.postid;
    deletePost(postId).then(() => res.send(200)).catch(err => res.send(err));
});

app.get('/api/posts/:postid/comments', (req, res) => {
    const postId = req.params.postid;
    return getCommentsByPost(postId).then(r => res.send(r));
});

app.get('/api/comments', (req, res) => {
    getComments().then(coms => res.send(coms)).catch(err => res.send(500))
});

app.post('/api/comments', (req, res) => {
    const comment = req.body.comment;
    try {
        if (comment.content == undefined || comment.content.trim() < 1) {
            res.send(400);
            return;
        }
        addComment(comment).then(() => res.send(comment)).catch(err => res.send(500));
    }
    catch {
        res.send(400);
    }
});

app.put('/api/comments/:commentid', (req, res) => {
    const comment = req.body.comment;
    const commentId = req.params.commentid;
    try {
        if (comment.content == undefined || comment.trim() < 1) {
            res.send(400);
            return;
        }
        updateComment(commentId, req.body.comment).then(() => res.send(200)).catch(err => res.send(500));
    }
    catch {
        res.send(400);
    }
});

app.delete('/api/comments/:commentid', (req, res) => {
    const commentId = req.params.commentid;
    deleteComment(commentId);
});

app.listen(process.env.API_PORT, process.env.API_HOST, () => {
    console.log(`Running at ${process.env.API_HOST}:${process.env.API_PORT}`);
});