const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'public/uploads' });

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
})

app.post('/', upload.single('file'), (req,res) => {
	const filePath = `public/uploads/${req.file.filename}`;
	fs.readFile(filePath, 'utf8', (err, data)=> {
		console.log(data);
	})
	res.sendFile(path.join(__dirname, filePath));
})

app.listen(3000);