const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.urlencoded({ extended:false }));
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello");
});
// let userData =[];
app.post("/createUser",(req,res)=>{
    const uname = req.body.uname;        ////when data come in form it comes in body
    const phone = req.body.phone;
    const rawdata = {"name":uname, "phone":phone}
    let userData = JSON.parse(fs.readFileSync("store.json", "utf-8"));
    userData.push(rawdata);
    // JSON.parse(userData);
    // console.log(userData);
    // console.log(userData);
    // userData.push(rawdata);
    // console.log(userData);
    
    fs.writeFileSync("store.json", JSON.stringify(userData));
    // res.redirect("/");

    res.send("User created");
});

///to display the data

app.get("/displayUser", (req, res)=>{
    const data = fs.readFileSync("store.json", "utf-8");
    res.send(`Username is:${data}`);
});
///Display individual user(: is fto define parameter accessed by req.params)
app.get("/displayUser/:name", (req,res)=>{
    res.send('page to display individual user');
});

app.listen(9999);