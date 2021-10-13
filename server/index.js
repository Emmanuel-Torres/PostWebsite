const express = require('express');
const { getPost, addPost } = require('./services/db_services');
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

console.log(process.env.DB_HOST)
const samplePosts = [
    {
        id: 1,
        title: "Juan Guion",
        author: "Maksad",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu condimentum leo, quis molestie metus. Mauris condimentum dolor ut enim accumsan interdum. In vestibulum turpis sed pretium fermentum. In consectetur porta nunc, eget eleifend sem commodo in. Mauris ullamcorper ipsum in leo auctor, sit amet semper velit accumsan. Nulla in eros porta, commodo ipsum non, ultrices sapien. Aenean sit amet sagittis erat. Etiam blandit nulla commodo, euismod ante ac, interdum nulla. Pellentesque sed purus mi. Donec sodales justo et malesuada dapibus.",
        date: new Date()
    },
    {
        id: 2,
        title: "miau",
        author: "Justin",
        content: "Aliquam consequat odio a sem tempor, ac commodo lorem vulputate. In nisl leo, viverra ac congue et, placerat eu sapien. Mauris tempus ex et facilisis euismod. Mauris laoreet interdum pharetra. Ut rhoncus, ipsum sed finibus consequat, nisl ligula scelerisque arcu, non pulvinar erat nunc in enim. Vivamus finibus nec lectus at tempor. Nulla sed quam dui. Pellentesque hendrerit, ex a laoreet sodales, augue leo rhoncus nisl, sagittis lacinia justo turpis at nisl. Aenean dignissim fermentum lectus nec finibus. Cras facilisis leo nibh, malesuada accumsan odio lacinia sit amet. Etiam luctus vestibulum augue in porta.",
        date: new Date()
    },
    {
        id: 3,
        title: "Foo",
        author: "Brennan",
        content: "Vivamus feugiat risus ac scelerisque posuere. Proin mi nibh, tincidunt vitae tortor ac, elementum ultrices sapien. Sed pellentesque euismod est sollicitudin volutpat. Mauris sed magna vel mauris gravida tempus eu quis dui. Proin volutpat et sapien id suscipit. In venenatis velit quis fermentum cursus. Integer mi justo, aliquam eget dolor vitae, scelerisque sollicitudin justo. Cras at facilisis nulla. Praesent auctor justo vitae nulla blandit tempus. Nunc quis mauris leo. Cras vulputate dolor sit amet pretium venenatis. Nam accumsan ex eu rhoncus vehicula. Pellentesque sollicitudin maximus felis ullamcorper porttitor. Aliquam ut posuere enim.",
        date: new Date()
    }
];

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/posts', (req, res) => {
    getPost().then(qry => res.send(qry));
});

app.post('/addPost', (req, res) => {
    // const obj = { ...req.body, id: Math.floor(Math.random() * (100000 - 10) ) + 10, date: new Date() };
    // samplePosts.push(obj);
    addPost(req.body).then(() => res.send(req.body))
});

app.post('/updatePost', (req, res) => {
    const obj = req.body;
    const index = samplePosts.findIndex(p => p.id === obj.id);
    samplePosts[index] = obj;
    res.send(200)
});

app.listen(process.env.API_PORT, process.env.API_HOST, () => {
    console.log(`Running at ${process.env.API_HOST}:${process.env.API_PORT}`);
});