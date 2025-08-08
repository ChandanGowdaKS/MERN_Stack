// Qs1.Create a new input and button element on the
// page using JavaScript only. Set the text of button to “Clickme”;
let btn = document.createElement("button");
let inp = document.createElement("input");
// document.querySelector(btn);
btn.innerText = "Click Me";
document.querySelector("body").append(btn);
document.querySelector("body").append(inp);

btn.setAttribute("id", "btn");
inp.setAttribute("PlaceHolder", "Username");
btn.classList.add("btn");

let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
h1.style.color = "purple";
h1.classList.add("h1style");
document.querySelector("body").append(h1);


let text = document.createElement("p");
text.innerHTML = "My own <b>DOM</b> Practice";
document.querySelector("body").append(text);
