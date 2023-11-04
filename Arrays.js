//Map
// let array = ["Dhananjay", "Ayush", "Charchit"];
// let array1 = array.map(x=>upperCase(x));

// function upperCase(x){
//     let y=x.toUpperCase();
//     return y;
// }
// console.log(array1);

//FILTER

/*JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the passed arguments
JavaScript functions do not check the number of arguments received.

*/

// let numbersArray = [2, 3, 4, 5, 6, 7, 8, 9, 0];
// function isEven(x) {  //
//     if (x % 2 === 0) {
//       return true;
//     } else {
//         console.log(x)
//       return false;
//     }
//   }
// let filterdArray = numbersArray.filter((x) =>isEven(x));

// console.log(filterdArray);

//Reduce

let numbers_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let initialValue = 0;
let sum_of_numbers = numbers_array.reduce(sum, initialValue);
console.log(sum_of_numbers);
function sum(accumaltor, value) {
  return accumaltor + value;
}

//More Array Methods
