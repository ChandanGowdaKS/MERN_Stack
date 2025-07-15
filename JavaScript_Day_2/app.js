// Javascript program to get the first n elements of an array[n can be any positive number].
// for example: for array[7, 9, 0, -2] and n = 3
// print[7,9,0]

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let user_input = prompt("enter the number of elements u need");
// console.log(arr.slice(0, user_input));

//Q2.
/* Write a JavaScript program to get the last n elements of an array[n can be any positive number]
For example for array [7,9,0,-2] and n=3
print [9,0,-2] */

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// let user_input = prompt("Enter the number");
// console.log(arr.slice(-user_input));

//Q3
/* Write a JavaScript program to check whether a string is blank or not */

// let user_string = prompt("Enter the string")
// if (user_string.length == 0) {
//     console.log("Yes!! it's empty string");
// }
// else {
//     console.log("Not an empty string");
// }

//Q4
/*
Write a JavaScript program to test whether the character at the given (character) index is lower case. */

// let user_input = prompt("Enter the string to check");
// let index_letter = prompt("enter the index number you wanna check ");

// if (user_input[index_letter] == user_input[index_letter].toLowerCase()) {
//     console.log("Yeah it is lower");
// } else {
//     console.log("No its not");
// }

//Q5
/* Write a JavScript to strip leading and trailing spaces from a string */

// let user_input = prompt("enter the string");
// console.log(user_input.trim());

//Q6
/* Write a JavaScript program to check if an element exists in an array or not. */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let user_arr_input = 20;

if (arr.indexOf(user_arr_input) !=-1) {
    console.log("it's present in an array");
} else {
    console.log("it's not present in an array");
}