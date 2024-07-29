require('dotenv').config();
const express =require('express')
const app =express();


const host = process.env.HOST;
const port = process.env.PORT;
app.get("/",(req,res,next)=>{
    res.sendFile(__dirname+'/index.html')
})
app.get("/",(req,res,next)=>{
    res.sendFile(__dirname+'/about.html')
})
app.get("/service",(req,res,next)=>{
    res.sendFile(__dirname+'/service.html')
})
app.get("/contact",(req,res,next)=>{
    res.sendFile(__dirname+'/contact.html')
})
app.get("/*",(req,res,next)=>{
    res.sendFile(__dirname+'/404.html')
})


app.listen(port,()=>{
    console.log(`server started on ${host}:${port}`);
})
