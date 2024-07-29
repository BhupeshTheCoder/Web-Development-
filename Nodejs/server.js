const express =require('express');
const app= express();
const bodyParser =require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.get("/product",(req,res,next)=>{
    res.send("this is get request for product")
})
app.post("/product",(req,res,next)=>{
    //res.send("this is post request for product")
    res.setHeader('content-Type','text/plain')
    const data={
          pname:req.body.pname,
          price:req.body.price,
          pcompany:req.body.pcompany

    }
    res.send(data);
})
app.put("/product",(req,res,next)=>{
    res.send("this is get request")
})
app.delete("/product",(req,res,next)=>{
    res.send("this is get request")
})
app.listen(9991,()=>{
    console.log("server started")
})