require('dotenv').config();
const http =require('http');
const fs =require('fs');
const host =process.env.HOST
const port =process.env.PORT

let server =http.createServer((req,res)=>{
    if(req.url=="/" || req.url=="/home"){
        let myReader = fs.createReadStream(__dirname+"/index.html","utf-8");
        //res.writeHead(200,{"content-type":"text.html"});
        myReader.pipe(res);
    }else if(req.url=="/about"){
        let myReader = fs.createReadStream(__dirname+"/about.html","utf-8");
        myReader.pipe(res);
    }else if(req.url=="/service"){
        let myReader = fs.createReadStream(__dirname+"/service.html","utf-8");
        myReader.pipe(res);
    }else if(req.url=="/contact"){
        let myReader = fs.createReadStream(__dirname+"/contact.html","utf-8");
        myReader.pipe(res);
    }
});





