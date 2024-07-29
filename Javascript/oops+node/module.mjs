

import {myName} from './external.mjs';

console.log(myName);

import {add} from './external.mjs';

console.log(add(20,30));
import Result from './get.mjs'     ///JAb humnae last m default export kia ho
//import {Result} from './get.mjs'   //// ye jab apn export likh rhe h
let resultObj = new Result(70,75,68);
resultObj.resultDetails();