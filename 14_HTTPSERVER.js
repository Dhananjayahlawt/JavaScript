const http=require('http');
const PORT=3000;
const server=http.createServer(function listener(request,response){
  console.log("Request Received")
  if(request.url="/home"){

    response.end(JSON.stringify({message:"Welcome to HTTP Server"}))
  }
})

server.listen(PORT,function exec(){
    console.log(`Server listening on ${PORT}`)
})

////Create Server using express

// const express=require("express");

// app.get('/home',(request,response)=>{
//     response.send("Welcome to Express Server");
// })
// app.post('/home',(request,response)=>{
//     response.json({message:"Welcome to express Sevrver"})
// })

// const app=express();
// app.listen(PORT,()=>{
//     console.log(`Server Listeing at PORT ${PORT}`)
// })
