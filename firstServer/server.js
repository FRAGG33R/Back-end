const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
	res.setHeader('content-type', 'text/html')
	if (req.url == '/')
	{
		res.statusCode = 200; 
		fs.readFile('./website/index.html', (err, data) => {
			if (err)
				console.log(err);
			else
				res.write(data);
			res.end();
		})
	}
	else
	{
		res.statusCode = 404;
		res.write('<p> 404 PAGE NOT FOUND</p>');
		res.end();
	}
})

server.listen(3000, 'localhost');