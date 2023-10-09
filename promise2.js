// function creatPromise(data) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function exec() {
//       data = "ABCDEF";
//       resolve(data);
//     }, 3000);
//   });
// }

// let x = creatPromise("Dhananjay");
// x.then((value) => {
//   return value;
// }).then((value) => {
//   console.log("H promise chaining done ", value);
// });

function createPromises(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 5000);
  });
}
x = createPromises("Pranav");
x.then((data) => {
  setTimeout(() => {
    return data;
  }, 3000);
})
  .then((data) => {
    setTimeout(() => {
      console.log("Inside second timeout");
    }, 3000);
    return data;
  })
  .then((data) => {
    console.log("Fibal promse objet resolved", data);
  });

console.log("Code finished");
