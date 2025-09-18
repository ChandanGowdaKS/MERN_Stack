const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

// home page
app.get("/", (req, res) => {
    res.render("home.ejs");
});

// dice rolling page
app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("diceroll.ejs",{diceVal});
});

// port
app.listen(port, () => {
    console.log(`listening on ${port}`)
});

// instagram ejs
app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    res.render("instagram", { username });
});