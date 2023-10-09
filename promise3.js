function downloadFile(url) {
  return new Promise((resolve, reject) => {
    console.log("Download File Promise Called");
    setTimeout(() => {
      let Data = "abcedef";
      //   reject("Downlaod Promise Reject");
      resolve(Data);
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
    }, 3000);
  });
}

downloadFile("xyz.com")
  .then((data) => {
    console.log("Downloadede Data", data);
    return writeFile(data);
  })
  .then((data) => {
    console.log("FileNmae", data);
  })
  process.on("unhandledRejection", (reason, promise) => {
    console.log("1111111",promise,reason)
  });
