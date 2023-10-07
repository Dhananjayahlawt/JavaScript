function downloadFile(url) {
  return new Promise((resolve, reject) => {
    console.log("Downloading Start");
    setTimeout(() => {
      let data = "ABCDEF";
      if (data) {
        console.log("Downloading Finished");
        resolve(data);
      } else {
        reject("Download Failed");
      }
    }, 5000);
  });
}

function writeFile(data) {
  return new Promise((resolve, reject) => {
    console.log("Writting in the file starts");
    setTimeout(() => {
      let fileName = "file.txt";
      if (fileName) {
        resolve(fileName);
      } else {
        reject("Wriiting into the File Failed ");
      }
    }, 5000);
  });
}

function uploadFile(url, fileName) {
  return new Promise((resolve,reject) => {
    console.log("Uploading Starts");
    setTimeout(() => {
      let response = "";
      if (response) {
        resolve(response);
      } else {
        reject("Uploading Failed");
      }
    },5000);
  });
}
downloadFile("xyz.com")
  .then(
    function Success(data) {
      console.log("Downloading Completed");
      return writeFile(data);
    },
    function errorHandler(msg) {
      console.log(msg);
    }
  )
  .then(
    function Success(fileName) {
      console.log("Writting  Completed");
      return uploadFile("uplaod.com", fileName);
    },
    function errorHandler(msg) {
      console.log(msg);
    }
  )
  .then(
    function Success(data) {
      console.log("Uplaoding  Completed");
    },
    function errorHandler(msg) {
      console.log(msg);
    }
  );
