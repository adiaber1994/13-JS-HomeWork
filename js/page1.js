
let elem = document.querySelector('#root');
let h1 = document.createElement("h1");
h1.textContent = "Sign up";

let div1 = document.createElement("div");
div1.textContent = "what is your name?"; 
let UserName = document.createElement("input");
UserName.setAttribute("type", "text",);

let div2= document.createElement("div");
div2.textContent = "your email is?"; 
let UserEmail = document.createElement("input");
UserEmail.setAttribute("type", "text",);

let div3 = document.createElement("div");
div3.textContent = "give a good password"; 
let Password = document.createElement("input");
Password.setAttribute("type", "password",);

let div4 = document.createElement("div");

let MyBtn = document.createElement("button");
MyBtn.textContent = "sign in";



elem.appendChild(h1);
elem.appendChild(div1);
elem.appendChild(UserName);
elem.appendChild(div2);
elem.appendChild(UserEmail);
elem.appendChild(div3);
elem.appendChild(Password);
elem.appendChild(div4);
elem.appendChild(MyBtn);





