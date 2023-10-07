function downloadFile(url, cb) {
  console.log("Starting Doenlaoding", url);
  setTimeout(
    (down = () => {
      let downloadedData = "ABCDEF";
      cb(downloadedData);
    }),
    5000
  );
}
function writeFile(data, cb) {
  console.log("Wrtitting Starting");
  setTimeout(() => {
      let fileName = "file.txt";
      cb(fileName);
    },5000);
}

function UploadFile(url, fileName, cb) {
  console.log("UPloading Start");
  setTimeout(() => {
    console.log("uplaod Start");
    let response = "SUCESS";
    cb(response);
  },5000);
}

downloadFile("xyz.com", function downloadProcess(data) {
  console.log("Downlaoded Data", data);
  writeFile(data, function write(fileName) {
    console.log(
      "We have dowblaoded and written the file.now we will uplload",
      fileName
    );
    UploadFile("www.uplaod.com", fileName, function uplaod(response) {
      console.log("Upaod completed onthis url :-", response);
    });
  });
});
