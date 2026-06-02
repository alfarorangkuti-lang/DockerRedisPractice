const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send([{'kategori' : 'JB', 'deskripsi' : 'unit jadi baru'}, {'kategori' : '2ND', 'deskripsi' : 'unit bekas'}]);
})

module.exports = app