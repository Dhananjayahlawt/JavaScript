/*
    1. Log out "Program started"
    2. Throw an Error Object with the message "Uh oh!"
    3. At the end of the program log out "Program complete!"
    4. Run the program and watch it crash
    5. Create a try/catch block that console.error's out  the error message
    6. Run the program again and see the difference
*/

try {
  console.log("Program Started");
  throw new Error("Uh oh!");
} catch (error) {
  console.log(error.message);
}
console.log("Program Complete");

/*
    1. Create a loop that loops 10 times starting at 1
    2. On each loop iteration, print out the loop number
    3. On loop number 5, throw an Error Object with the message "Boom!"
    4. Catch the error and console.error the loop number
    5. Make sure the loop goes all the way to 10
*/

// let i;
// try {
//   // But this method does not ierate over complete for loop
//   for (i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i === 5) {
//       throw new Error("Boom!");
//     }
//   }
// } catch (error) {
//   console.error(`error ${i}`);
// }

for (let i = 1; i <= 10; i++) {
  console.log(i);
  try {
    if (i === 5) {
      throw new Error("bOOM!");
    }
  } catch (error) {
    console.log(`Error ${i}`);
  }
}
