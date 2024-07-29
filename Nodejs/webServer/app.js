// require('dotenv').config();
// const express =require('express')
// const app =express();

// // const host = process.env.HOST;
// // const port = process.env.PORT;

// app.get("/",(req,res,next)=>{
//     //res.sendFile(__dirname+'/index.html')
//     res.send("This is simple get request")
// })
// app.post("/about",(req,res,next)=>{
//     //res.sendFile(__dirname+'/about.html')
//     res.send("This is simple post request for about")
// })
// app.put("/service",(req,res,next)=>{
//     //res.sendFile(__dirname+'/service.html')
//     res.send("This is simple put request for service")
// })
// app.delete("/contact",(req,res,next)=>{
//     //res.sendFile(__dirname+'/contact.html')
//     res.send("This is simple delete request for contact")
// })

// app.listen(5555,()=>{
//     console.log(`sever started on ${host}:${port}`);
//     //console.log("sever started ");
// })


require('dotenv').config();
const express =require('express')
const app =express();
const path=require('path');

const host = process.env.HOST;
const port = process.env.PORT;

const auth = require('./middleware/auth');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

///file path for Accessing Satic Data
app.use(express.static(__dirname+"/public"));


///file path for tempalte

const viewPath=path.join(__dirname,"/template/views");


app.set('view engine', 'hbs');
app.set('views', viewPath);

app.get("/",(req,res,next)=>{
    //res.send(__dirname+'/index.html')
    res.render("index",{
        owner:"Bhupesh Verma",
        company:"logo"
    })
   // res.send("This is simple get request")
})
app.get("/about", (req,res,next)=>{
    res.render('form');
    //res.send(__dirname+'/about.html')
    //res.render()
    // res.send("This is simple get request for about")
})

app.post('/formHandler', auth.verifyUsername, (req, res) => {
    const data = req.body.uname;
    res.send(`The username is: ${data}`);
})
app.get("/service",(req,res,next)=>{
    //res.send(__dirname+'/service.html')
    res.send("This is simple get request for service")
})
app.get("/contact",(req,res,next)=>{
    //res.send(__dirname+'/contact.html')
    res.send("This is simple get request for contact")
})

app.listen(port,()=>{
    console.log(`sever started on ${host}:${port}`);
    //console.log("sever started ");
})