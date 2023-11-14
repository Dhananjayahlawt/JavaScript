/*
    1. Add a new function called "boop" to the prototype
       of String. This function should simply log out the
       String "Boop!".
    2. Create a new String with the value "meow" and
       assign it to a variable called "cat".
    3. Call the "boop" method on "cat" to make sure it
       works correctly.
*/

// String.prototype.boop = () => {
//   console.log("Boop!");
// };
// let cat="meow";
// console.log(Object.getOwnPropertyNames(cat.__proto__));
// cat.boop();


/*
    1. Log out all the properties within the Object
       prototype. (Only it's own properties)
    2. Log out all the properties within the Array
       prototype. (Only it's own properties)
    3. Log out all the properties within the Array
       prototype's prototype.

    4. Does this make sense? Why?
*/

console.log(([].prototype))