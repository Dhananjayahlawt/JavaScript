//Problems with CallBack -Callback Hell and The importnt one Inversion of control
// function createPromisesWithSetTimeout() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function exec() {
//       let n = Math.floor(Math.random() * 10);
//       console.log(n);
//       if (n % 2 == 0) {
//         resolve(n);
//       } else {
//         reject(n);
//       }
//     }, 5000);
//     console.log("create promises finish")
//   });
// }
// let y = createPromisesWithSetTimeout(); //Pomises are sync in nature it immediately returned a object if some web api is there which takes time

////////////////////////////////////

// function createPromisesWithloop() {
//   return new Promise(function (resolve, reject) {
//     for (let  i=0;i<1000000000;i++){};  //it will blockthe code until the timer finish and promise does niot return any object until it get completed
//     let n = Math.floor(Math.random() * 10);
//     console.log(n);
//     if (n % 2 == 0) {
//       resolve(n,1,2);  //it will only  send n no of parameters does not give nay error
//       console.log("Hi,Promise  fullfilled") // It will print this after resolve also
//       resolve (10);  //NO effect as first resolve is the priority;
//     } else {
//       reject(n);
//     }
//   });
// }
// let y=createPromisesWithloop();
// console.log(y)

/////////////////////////////////////////

// function createPromisesWithloop() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let n = Math.floor(Math.random() * 10);
//       if (n % 2 == 0) {
//         resolve(n);
//       } else {
//         reject(n);
//       }
//     }, 3000);
//   });
// }

// let p = createPromisesWithloop();
// p.then(
//   function fullfillHandler(value) {
//     console.log("Promises Fulfill", value);
//   },
//   function rejectionHandler(value) {
//     //MicroTask queue have higher priority than callBack queue;
//     console.log("Promises Rejection", value); //fulfuillHandelr and RejectionHandler are store in microtask queue after resolve promises
//   }
// );

function createPromises() {
  return new Promise(function exec(resolve, reject) {
    let n = Math.floor(Math.random ()* 10);
    if (n % 2 == 0) {
      resolve(n);
    } else {
      reject(n);
    }
  });
}
setTimeout(function () {
    console.log("SETtimeout Executed ")
},0);
let p = createPromises();
p.then(
  function fullfillHandler(value) {
    console.log("Fullfill Handler", value);
  },
  function rejectionHandler(value) {
    console.log("Rejection Handler", value);
  }
);
