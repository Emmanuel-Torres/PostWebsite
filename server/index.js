const express = require('express');
const { getPost, addPost, updatePost, deletePost, getComments, addComment, updateComment, deleteComment } = require('./services/db_services');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

console.log(process.env.DB_HOST)

app.get('/api', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/posts', (req, res) => {
    getPost().then(qry => res.send(qry));
});

app.post('/api/addPost', (req, res) => {
    if (req.body.post.title == undefined || req.body.post.title.trim() < 1) {
        res.send(400);
        return;
    }
    addPost(req.body).then(() => res.send(200)).catch(err => res.send(500))
});

app.put('/api/updatePost/:postid', (req, res) => {
    if (req.body.post.title == undefined || req.body.post.title.trim() < 1) {
        res.send(400);
        return;
    }
    const postId = req.params.postid;
    updatePost(postId, req.body.post).then(() => res.send(req.body.post)).catch(err => res.send(500));
});

app.delete('/api/deletepost/:postid', (req, res) => {
    const postId = req.params.postid;
    deletePost(postId).then(() => res.send(200)).catch(err => res.send(err));
});

app.get('/api/comments', (req, res) => {
    getComments().then(coms => res.send(coms)).catch(err => res.send(500))
});

app.post('/api/addComment', (req, res) => {
    if (req.body.comment.content == undefined || req.body.comment.content.trim() < 1) {
        res.send(400);
        return;
    }
    addComment(req.body.comment).then(() => res.send(req.body.comment)).catch(err => res.send(500));
});

app.put('/api/updateComment/:commentid', (req, res) => {
    if (req.body.comment.content == undefined || req.body.comment.trim() < 1) {
        res.send(400);
        return;
    }
    const commentId = req.params.commentid;
    updateComment(commentId, req.body.comment).then(() => res.send(200)).catch(err => res.send(500));
});

app.delete('/api/deleteComment/:commentid', (req, res) => {
    const commentId = req.params.commentid;
    deleteComment(commntId);
});

app.listen(process.env.API_PORT, process.env.API_HOST, () => {
    console.log(`Running at ${process.env.API_HOST}:${process.env.API_PORT}`);
});