// var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

// var newNumbers = [];
// numbers.forEach(function (num) {
//   newNumbers.push(num * 2);
// });

// const newNumbers = numbers.map(function (num) {
//   return num * 2;
// });

// console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

// var newNumbers = [];
// numbers.forEach(function(num){
//     if(num<10)
//         newNumbers.push(num);
// });

// console.log(newNumbers);

// const newNumbers = numbers.filter(function (num) {
//   return num < 10;
// });

// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

// var sum = 0;
// numbers.forEach(function (num) {
//   sum += num;
// });

// console.log(sum);

// var sum = numbers.reduce(function (accumulator, num) {
//   return accumulator + num;
// });

// console.log(sum);

//Find - find the first item that matches from an array.

// const ans = numbers.find(function (num) {
//   return num >= 10;
// });

// console.log(ans);

//FindIndex - find the index of the first item that matches.

// const ans = numbers.findIndex(function(num){
//     return num>=10;
// })

// console.log(ans);

import emojipedia from "./emojipedia";

const newArray = emojipedia.map(function (str) {
  return str.meaning.substring(0, 100);
});

console.log(newArray);
