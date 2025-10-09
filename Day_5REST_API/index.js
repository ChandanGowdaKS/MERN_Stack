const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
    username: "Chandan",
    Content: "International Rated chess Player and Software Developer",
},
    {
    username: "Shiva",
    Content: "God",
},
    {
    username: "BMS",
    Content: "College at Bengaluru",
    },
];


app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts});
    // res.send("Server is working");
})

app.get("/posts/new", (req, res) => {
    res.render("new_post.ejs");
})

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    posts.push({ username, Content: content }); // Correct way to add
    res.redirect("/posts"); // Redirect to main page
})

app.listen(port, () => {
    console.log("3000 Port is listening");
});