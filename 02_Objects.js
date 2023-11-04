//Object method

// console.log("Object keys",Object.keys(object));
// console.log("Object keys",Object.values(object));
// console.log("Object keys",Object.entries(object));

// Object Exercises

/*
   1. Create an object called "myPet" with the following properties:
        - name -> "Sudo"
        - type -> "Dog"
        - breed -> "Poodle"
        - age -> 7
        - friends -> ["Bit", "Byte", "Data"]
    2. Print out "myPet" to the terminal
    3. Add a new property: colour -> "Black"
    4. Change "breed" to be "Beagle"
    5. Remove "Data" from the list of friends for "myPet"
    6. Print out "myPet" to the terminal again
    7. Add "Chip" to the list of friends for "myPet"
    8. Print out "myPet" to the terminal again
*/

let personDetails = {
  id: 1,
  name: "anish",
  country: "India",
  friends: ["anu", "Ashu", "abhi"],
};
personDetails["id"] = 2;
personDetails.friends.push("chit");
console.log(personDetails);
let indextoDelete = personDetails.friends.indexOf("Ashu");
personDetails.friends.splice(indextoDelete, 1);
console.log(personDetails);

/*
    1. Create the following 3 objects:
        - const banana = {name: "banana", quantity: 1, price: 1.95}
        - const apple = {name: "apple", quantity: 1, price: 1.45}
        - const candy = {name: "candy", quantity: 1, price: 3.50}
    2. Create an object called "store" with the following properties:
        - storeNumber -> 5
        - locationCity -> "Milan"
        - locationCountry -> "Italy"
        - products: [banana, apple, candy]
    3. Print out "store" to the terminal
    4. Only print out all the product objects in "store"
    5. Only print out the 3rd product object in "store"
    6. Change the price of the banana object through the store object
       to be 1.75..
    7. Print out both "store" and "banana"
    8. Change the price of the candy object directly to be 4.99
    9. Print out both "store" and "candy"
*/
const banana = { name: "banana", quantity: 1, price: 1.95 };
const apple = { name: "apple", quantity: 1, price: 1.45 };
const candy = { name: "candy", quantity: 1, price: 3.5 };
const beetroot = { name: "beetroot", quantity: 2, price: 6.4 };
let store = {
  storeNumber: 5,
  locationCity: "Milan",
  locationCountry: "Italy",
  products: [banana, apple, candy],
};
console.log("Store", store);
console.log("store products", store.products);
console.log("3rd Product", store.products.at(2)); //indexing start with 0
let findIndexOfBanana = store.products.indexOf(banana);
store.products[findIndexOfBanana].price = 1.75;
console.log("Banana Product price change", banana);
candy.price = 4.99;
console.log("store", store);
console.log("candy", candy);

/*
    1. Create an object called "houseForSale" with the following properties:
        - area -> 940
        - value -> 320000
        - streetName -> "Fifth Street"
        - built -> "2012"
        - owner -> {name: "Blake", age: 29}
        - offers -> [290000, 295000, 315000, 312000]
    2. Print out "houseForSale" to the terminal
    3. Delete the property with the key "built"
    4. Change the age of the owner to be 30 inside "houseForSale"
    5. Print out the maximum offerPrice (use reduce)
    6. Add a new property: "sale price" -> 312000
    7. Print out "houseForSale" to the terminal
    *This is a challenging exercise - take it slow and step by step
*/
const houseForSale = {
  area: 940,
  value: 320000,
  streetName: "Fifth Street",
  built: "2012",
  owner: {
    name: "Blake",
    age: 29,
  },
  offers: [290000, 295000, 315000, 312000],
};
console.log("house for sale", houseForSale);
delete houseForSale.built;
houseForSale.owner.age = 30;
let Maximum = houseForSale.offers.reduce((acc, x) => Math.max(acc, x), 0);
console.log("Maximum offer", Maximum);
houseForSale["sale price"] = 312000;
console.log("house for sale", houseForSale);

/*
    1. Create an object called "myConsole"
    2. Assign "myConsole" the key "log" with a value that is
       an arrow function.
       This arrow function will have one parameter called "message"
       The function will just console.log out the "message"
    3. How would you call this "log" function inside the object?
    You should be able to do: myConsole.log("Hello, friend!");
    BONUS: How might the built-in "console" work?
*/
const myConsole = {
  log: (message) => {
    console.log(message);
  },
};
myConsole.log("Hello,friend!")
