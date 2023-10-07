// console.log("Hi,Code Execution Starts");
// let count =0;
// let y =setInterval(function exec(){
//     console.log("set Interval execution starts")
//     count ++;
//     console.log(count);
//     if(count>15){
//         clearInterval(y);
//     }
// },0)
// for(let i=0;i<1000000000;i++){
// }
// console.log("Hi,Code execution stops")

function downloadFile(context, cb) {
  setTimeout(function Download() {
    const data="Pranav"
    console.log("Downloaded Data",data)
    cb(data);
  }, 2000);
}
function writeFile(data, cb) {
  setTimeout(function write() {
    const data1 = data;
    console.log("Written Data",data1)
    cb(data1);
  }, 2000);
}

function uploadFile(data) {
  setTimeout(function upload() {
    console.log("Uploaded Data",data)
  }, 2000);
}

downloadFile("Dhanajay", function processDownload(context) {
  writeFile(context, function upload(context) {
    uploadFile(context);
  });
});
