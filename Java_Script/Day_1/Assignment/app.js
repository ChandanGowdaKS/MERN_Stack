// QA1
let num = 10;
if (num % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}
//Qa2
// let name = prompt("Enter your name");
// let age = prompt("Enter your age");

// alert(` ${name} is ${age} years old`)

//QA3

// let number = 1;

// switch (number) {
//     case 1:
//         console.log("January, February, March");
//         break;
//     case 2:
//         console.log("April, May, June");
//         break;
//     case 3:
//         console.log("july, August, September");
//         break;
//     case 4:
//         console.log("October, November, December");
//         break;
//     default:
//         console.log("wrong input");
//         break;
// }

//QA4

// let string = "applea";

// if ((string[0] === "A" || string[0] === "a") && string.length > 5) {
//     console.log("Golden string");
// }
// else {
//     console.log("Not a goldedn string");
// }

//QA5 largest of three numbers

// let num1 = 90//prompt("Enter the first number");
// let num2 = 80//prompt("Enter the second number");
// let num3 = 80//prompt("Enter the third number");

// if (num1 > num2) {
//     if (num1 > num3) {
//         console.log(`${num1} is largest`);
//     } else if(num3 > num2){
//         console.log(`${num3} is largest`);
//     }
// }
// else if(num2 > num3){
//     console.log(`${num2} is largest`);
// }
// else {
//     console.log(`${num3} is largest`);
// }

//QA6

let num1 = 1;
let num2 = 12;

if (num1[num1.length - 1] === num2[num2.length - 1]) {
    console.log("yes they have same last digit");
}
else {
    console.log("No they don't")
}
console.log(num1[num1.length - 1])