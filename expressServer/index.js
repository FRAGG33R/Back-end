const express = require('express');
const app = express();
const port = 3000

app.get('/', (req, res) => {
	res.send("Hello world !");
	// you can also render a page content like in the first node server
	res.end();
})

app.listen(3000);