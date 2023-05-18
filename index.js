let http = require("http");

//console.log(http);

http.createServer(function(req, res){
	console.log(req.url);

	if(req.url === "/"){
		res.writeHead(200, {'Content-Type': 'text/plain'})
		res.end('Hello, Mabuhay. Welcome to Philippines.')
	} else if(req.url === "/dave"){
		res.writeHead(200, {'Content-Type': 'text/plain'})
		res.end('Hi, I am Dave.')
	} else {
		res.writeHead(404, {'Content-Type': '_text/plain'})
		res.end('Resource cannot be found')
	}

}).listen(4000);
console.log(`Server is running at local host:4000`);