function downloadFile(url) {
  return new Promise((resolve, reject) => {
    console.log("Download File Promise Called");
    setTimeout(() => {
      let Data = "abcedef";
      //   reject("Downlaod Promise Reject");
      reject(Data);
    }, 3000);
  });
}

function writeFile(Data) {
  return new Promise((resolve, reject) => {
    console.log("Write File Promise Called");
    setTimeout(() => {
      let fileName = "file1.txt";
      reject("WriteFile Promise Reject");
      //   resolve(fileName);
    }, 6000);
  });
}

function immediateResolvePromise() {
  return new Promise((resolve, reject) => {
    console.log("Immediate Promise called");
    reject(3);
  });
}

/************************************Promise.all ==> gives the value of all the promises if all fulffill otherwise empty promises array */

// Promise.all([
//   downloadFile("xyz.txt").catch((err)=>err),
//   writeFile("file.txt").catch((err)=>err),
//   4,
//   immediateResolvePromise().catch((err)=>err),
// ])
//   .then((values) => {
//     console.log(values)
//   })
//   .catch((err) => {
//     console.log(err);
//   });

/************************************Promise.all Settled ==>gives the value of all the promise fulfillor reject ****************/

// Promise.allSettled([
//   downloadFile("xyz.com"),
//   writeFile("FileName.txt"),
//   3,
//   immediateResolvePromise(),
// ]).then((results) => console.log(results));

/*********************************************Promise.any() return the first promise that fullfill if all fails then attach.catch for aggraetae error */

Promise.any([
  downloadFile("xyz.com"),
  writeFile("FileName.txt"),
  immediateResolvePromise(),
]).then((results) => {console.log(results)}).catch((err)=>{
    console.log(err);
})


/****************************************Promise.race() givesfirst promis ethat resolved */
