
function checkAll(){
   //  alert("This field is required");

   let uName = document.myForm.fname.value;
   //let regName = "[a-zA-Z]{3,20}"
   if(uName.trim() == ""){
    alert("This fiels is required");
    document.getElementById("fname").focus();
    return false;
   }
}

