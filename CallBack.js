// for(let i=0;i<1000000000;i++){
// }
// console.log("Completed");

// const add = function (callback) {
//   const a = setTimeout(callback, 6000);
// };

// add(function callback() {
//   console.log("add completed");
// });
// setTimeout(function(){
//     console.log("setTimeout completed")
// },5000)

// console.log("terminated")


function timeConsumingByLoop(){
    console.log("Loop Starts");
    for(let i=0;i<=1000000000;i++){
    }
    console.log("Loops Ends");
}

function timeConsumingByRuntimeFeature0(){
    console.log("Feature 0 Starts")
    setTimeout(function exec(){
      console.log("Fetaure  0Completed");
      for(let i=0;i<=10000000000;i++){
    }
    },5000)
}

function timeConsumingByRuntimeFeature1(){
    console.log("Feature 1 Starts")
    setTimeout(function exec(){
      console.log("Fetaure 1 Completed");
    },0)
}


function timeConsumingByRuntimeFeature2(){
    console.log("Feature 2 Starts")
    setTimeout(function exec(){
      console.log("Fetaure 2 Completed");
    },500)
}
timeConsumingByLoop();
timeConsumingByRuntimeFeature0();
timeConsumingByRuntimeFeature1();
timeConsumingByRuntimeFeature2();
timeConsumingByLoop();
console.log("Terminated");


///////////////////////////////////////////////////////////////////////////////////


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
  