const fs =require('fs');

// //how to remove file Asynch..

// fs.unlink("writeFile.txt",(err,data)=>{
//     console.log("file remove succesfully");
// })



// //how to create directory
// fs.mkdir("newDir",(err,data)=>{
//     console.log("directory created suceesfully");
// })
// //how to remove directory
// fs.rmdir("newDir",(err,data)=>{
//     console.log("directory removed suceesfully");
// })


// //how to create directory and a file in it
// fs.mkdir("newDir",(err,data)=>{
//     fs.writeFile("newDir/newWriteFile","Ban gai dir m file",(err,data)=>{
//         console.log("directory created and file too");
//     });
    
// })
fs.unlink("newDir/newWriteFile",(err,data)=>{
    fs.rmdir("newDir",(err,data)=>{
        console.log("file and directory removed ");
    })
});