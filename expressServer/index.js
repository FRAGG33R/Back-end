const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {

	res.sendFile(path.join(__dirname, 'index.html'))
	// res.sendFile('index.html', { root: __dirname }); another way

})

app.get('*', (req, res) => {
	res.status(404).send('<h1>Oops - 404 page not found </p>')
	// res.redirect('/'); redirect to specific page 

})

app.listen(3000);