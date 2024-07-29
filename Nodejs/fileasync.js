const fs = require('fs');

fs.readFile("writeFile.txt","utf-8", (err,ourdata)=>{
    console.log(ourdata);
    console.log(err);


///

fs.writeFile("writeFile2.txt",ourdata, (err,data)=>{
    console.log("write operation is done");
});

///


fs.appendFile("writeFile2.txt","vaah yrr add hogya", (err,ourdata)=>{
    console.log("append operation is done");
});

})