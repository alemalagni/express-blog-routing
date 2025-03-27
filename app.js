const express = require('express');
const app = express();
const port = 3000;

// Index
app.get( '/posts/', (req, res) => {
    res.send('Lista dei post');
});

// Show
app.get( '/posts/:id', (req, res) => {
    res.send('Visualizzazione del post');
});

// Store
app.post( '/posts/', (req, res) => {
    res.send('Creazione del post');
});

// Update
app.put( '/posts/:id', (req, res) => {
    res.send('Modifica integrale del post');
});

// Modify
app.patch( '/posts/:id', (req, res) => {
    res.send('Modifica parziale del post');
});