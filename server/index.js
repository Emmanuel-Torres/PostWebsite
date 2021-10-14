const express = require('express');
const { getPost, addPost, updatePost, deletePost } = require('./services/db_services');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

console.log(process.env.DB_HOST)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/posts', (req, res) => {
    getPost().then(qry => res.send(qry));
});

app.post('/addPost', (req, res) => {
    addPost(req.body).then(() => res.send(req.body)).catch(err => res.send(err))
});

app.put('/updatePost/:postid', (req, res) => {
    const postId = req.params.postid;
    updatePost(postId, req.body).then(() => res.send(req.body)).catch(err => res.send(err))
});

app.delete('/deletepost/:postid', (req, res) => {
    const postId = req.params.postid;
    deletePost(postId).then(() => res.send(200)).catch(err => res.send(err));
});

app.listen(process.env.API_PORT, process.env.API_HOST, () => {
    console.log(`Running at ${process.env.API_HOST}:${process.env.API_PORT}`);
});