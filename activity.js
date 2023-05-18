let http = require("http");


http.createServer(function(req, res){
	console.log(req.url);

	if(req.url === "/"){
		res.writeHead(200, {'Content-Type': 'text/plain'})
		res.end('Welcome to our Page.')
	} else if(req.url === "/login"){
		res.writeHead(200, {'Content-Type': 'text/plain'})
			function login(e) {
  			event.preventDefault();
  			let userName = String(document.getElementById("username").value);
  			let password = String(document.getElementById("password").value);

  			let currUser = JSON.parse(localStorage.getItem(userName));
  			console.log(currUser);
  			if (currUser === null) {
    		alert("User not exists");
  			} else if (currUser.userName === userName && currUser.password === password) {
    		window.location.href = "index.html";
  			} else {
    		alert("Password mismatch");
  			}
			}
			function loginEmail(e){
  			event.preventDefault();
  			let email = document.getElementById('email').value;
  			let password = document.getElementById('password').value;
  			let currObj = null;
  			for(let i=0;i<localStorage.length;i++){
    		let obj = JSON.parse(localStorage.getItem(localStorage.key(i)));
    		if (obj.email==email){
     		 currObj = obj;
     		 break;
    		};
  			}

  			if(currObj==null){
   			 alert("Email does not exists");
  			} else if (currObj.email === email && currObj.password === password) {
   			 window.location.href = "index.html";
 		    } else {
    		alert("Password mismatch");
  			}
			}
		res.end('Welcome to the Login Page. Please log in your credentials.')
	} else if(req.url === "/register"){

		res.writeHead(200, {'Content-Type': 'text/plain'})
		function register(e) {
  		let email = document.getElementById("email").value;
 		let userName = document.getElementById("username").value;
  		let password = document.getElementById("password").value;


  		let obj = {
   	    email: email,
   	    userName: userName,
        password: password,
        };

        let json = JSON.stringify(obj);

        localStorage.setItem(userName, json);
    	}
		res.end('Welcome to the Register Page. Please register your details.')
	} else {
		res.writeHead(404, {'Content-Type': '_text/plain'})
		res.end('Resource not found')
	}


}).listen(8000);
console.log(`Server is running at local host:8000`);