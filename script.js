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

function handleToggle(e) {
  let pass = document.getElementById("password");

  let toggleBtn = document.getElementById("toggle");

  let currentType = pass.getAttribute("type");

  if (currentType === "password") {
    pass.setAttribute("type", "text");
    toggleBtn.setAttribute("class", "fa-solid fa-eye-slash");

  } else {
    pass.setAttribute("type", "password");
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