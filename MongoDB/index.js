// requiring mongoose
const mongoose = require("mongoose");

// connecting mongoose to MongoDB
main()
.then(()=>{
    console.log("Connection successful");
})
.catch((err)=>
    console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
// defining schema
const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});
// model
const User = mongoose.model("User", userSchema);
// inserting

const user1 = new User({
    name: "chandu",
    email: "cha@gmail.com",
    age: 20,
    
});

user1.save().then((res) => {
    console.log(res);
}).catch(err => {
    console.log(err);
});