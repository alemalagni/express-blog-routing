const express = require('express');
const app = express();
const port = 3000;

// index
app.get( '/posts/', (req, res) => {
    res.send('Lista dei post');
})

// show
app.get( '/posts/:id', (req, res) => {
    res.send('Visualizzazione del post');
})