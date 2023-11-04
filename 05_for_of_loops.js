/*
    1. Create a variable called "numbers" that points to this array:
        [10, 20, 40, 50, 20, 100]
    2. Use a for-of loop to print out each number squared
*/

const numbers=[10, 20, 40, 50, 20, 100];
for(const number of numbers){
    let squared=number*number;
    console.log(squared);
}

/*
    1. Create a variable called "ages" that points to this array:
        [10, 42, 15, 22, 11, 74, 39, 2]
    2. Create an array called "results" that starts off empty
    3. Use a for-of loop to loop over "ages" and add an Object
       to "results" with an "age" key having the value of the "age" 
       being looped over. Also, add a "name" key that is always "Dragon".
       Eg: {age: 10, name: "Dragon"}, {age: 42, name: "Dragon"}
    4. Print out "results"
    5. "results" should be:
        [{age: 10, name: "Dragon"}, {age: 42, name: "Dragon"},
         {age: 15, name: "Dragon"}, {age: 22, name: "Dragon"},
         {age: 11, name: "Dragon"}, {age: 74, name: "Dragon"},
         {age: 39, name: "Dragon"}, {age: 2, name: "Dragon"}]
*/

let ages=[10, 42, 15, 22, 11, 74, 39, 2];
let results=[];

for(let age of ages){
    let object={
        name:"Dragon",
        age:age
    }
    results.push(object);
}
console.log(results);



