

//how to create a server----------

const http =require('http');

let server =http.createServer((req,res)=>{
    if(req.url=="/"){
        res.write("This is home page");
        res.end();
    }
    else if(req.url=="/about"){
        res.write("This is home page");
        res.end();
    }else if(req.url=="/service"){
        res.write("This is service page");
    res.end();
   }
   else if(req.url=="/contact"){
    res.write("This is conatct page hua update");
    res.end();
   }
    // res.write("server created");
    // res.end();
});

server.listen(9999,()=>{
    //console.log("server satrted");
    
})