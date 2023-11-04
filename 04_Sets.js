/*
    1. Create a variable called "numbers" that points to a new Set
    2. Add the following numbers to "numbers" (each a separate line):
       1, 2, 3, 4, 5, 2, 3, 4
    3. Print out "numbers" and note what is inside it
    4. Repeat the same steps above but with an array
       How does this differ?
*/

let numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(2);
console.log(numbers);

/*
    1. Create an array called "points" with the following values:
       [10, 20, 10, 30, 15, 15, 35, 60, 10]
    2. How can you print out all the UNIQUE points inside "points"?
*/

let points = [10, 20, 10, 30, 15, 15, 35, 60, 10];
let uniquePoints = new Set(points);
console.log(uniquePoints);

/*
    1. Create an array called "numbers" with the following values:
       [10, 20, 15, 30, 15, 20, 35, 60, 10]
    2. Find the first duplicate value in "numbers" and print
       it out to the terminal
    HINT: Add the numbers to a Set as you for-loop over "numbers"
    *This is quite challenging and is a common interview question
*/

let number_Array = [10, 20, 15, 30, 15, 20, 35, 60, 10];
let seen_Numbers = new Set();
for (let i = 0; i <= number_Array.length; i++) {
  if (seen_Numbers.has(number_Array[i])) {
    console.log(number_Array[i]);
    break;
  } else {
    seen_Numbers.add(number_Array[i]);
  }
}

/*
    1. Create an array called "items" with the following values:
        - {name: "banana", quantity: 1, price: 1.95}
        - {name: "apple", quantity: 1, price: 1.45}
        - {name: "banana", quantity: 10, price: 0.05}
        - {name: "candy", quantity: 1, price: 3.50}
    2. Create a second array called "results" that starts off empty
    3. Create a Set called "duplicates"
    4. Add all the Objects in "items" to "results" in order, while
       skipping over any duplicate-named objects you encounter
       within "items" (In this example, only add the first banana item)
    5. Print out "results" - it should be:
    [
        {name: "banana", quantity: 1, price: 1.95},
        {name: "apple", quantity: 1, price: 1.45},
        {name: "candy", quantity: 1, price: 3.50}
    ]
    HINT: Use to the Set to keep track of duplicates
*/

const items = [
  { name: "banana", quantity: 1, price: 1.95 },
  { name: "apple", quantity: 1, price: 1.45 },
  { name: "banana", quantity: 10, price: 0.05 },
  { name: "candy", quantity: 1, price: 3.5 },
];
const results = [];
let duplicates = new Set();
for (let i = 0; i < items.length; i++) {
  if (duplicates.has(items[i].name)) {
    continue;
  } else {
    results.push(items[i]);
    duplicates.add(items[i].name);
  }
}
console.log(duplicates);
console.log(results);
