function add(){
    alert("You want to perform adddition")
   let no1=  document.getElementById("num1").value;
   let no2=  document.getElementById("num2").value;
   console.log(parseInt(no1)+parseInt(no2));
   document.getElementById("res").innerHTML=parseInt(no1)+parseInt(no2);
}

function sub(){
    alert("You want to perform Subtraction")
   let no1=  document.getElementById("num1").value;
   let no2=  document.getElementById("num2").value;
   console.log(parseInt(no1)-parseInt(no2));
   document.getElementById("res").innerHTML=parseInt(no1)-parseInt(no2);
}
function mul(){
    alert("You want to perform Multiplication")
   let no1=  document.getElementById("num1").value;
   let no2=  document.getElementById("num2").value;
   console.log(parseInt(no1)*parseInt(no2));
   document.getElementById("res").innerHTML=parseInt(no1)*parseInt(no2);
}

function div(){
    alert("You want to perform Division")
   let no1=  document.getElementById("num1").value;
   let no2=  document.getElementById("num2").value;
   console.log(parseInt(no1)/parseInt(no2));
   document.getElementById("res").innerHTML=parseInt(no1)/parseInt(no2);
}

