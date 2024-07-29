const validator = require('validator')
console.log(validator.isEmail("abc@gmail.com"))

let fname="";
console.log(validator.isEmpty(fname));
fname="Bhupesh";
console.log(validator.isEmpty(fname));
