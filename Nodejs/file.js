const fs = require('fs');


//write file synchronously
fs.writeFileSync("writeFile.txt","Kesae ho tum");


let data = fs.readFileSync("writeFile.txt","utf-8");
console.log(data);
