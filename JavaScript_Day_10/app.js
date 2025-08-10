let btn = document.querySelector("button");
btn.addEventListener("click", function () {
    let h3 = document.querySelector("h3");
    h3.innerText = getcolor();
    let boxcolor = document.querySelector("div.box");
    boxcolor.style.backgroundColor = getcolor();
});
function getcolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
    };