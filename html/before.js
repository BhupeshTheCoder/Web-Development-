function checkUID(){
   // window.alert("ok")
   let uid = document.myForm.uid.value;
   
   //for username
   if(uid.trim()==""){
      document.getElementById("uid").style.border= "2px solid red";
      document.getElementById("uiderr").innerHTML="This field is required"
      document.getElementById("uiderr").style.color="mintcream"

      return false;
      
   }else if(!uid==false){
      document.getElementById("uid").style.border= "2px solid green";
      document.getElementById("uiderr").innerHTML="completed"
      document.getElementById("uiderr").style.color="chartreuse"
      return false;
   }
}

function checkPas(){
   var regPAS="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
   // window.alert("ok")
   let pas = document.myForm.pas.value;
   
   //for username
   if(pas.trim()==""){
      document.getElementById("pas").style.border= "2px solid red";
      document.getElementById("paserr").innerHTML="This fiels is required"
      document.getElementById("paserr").style.color="mintcream"

      return false;
      
   }else if(!pas.match(regPAS)){
      document.getElementById("pas").style.border= "2px solid Green";
      document.getElementById("paserr").innerHTML="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
      document.getElementById("paserr").style.color="mintcream"
      return false;
   }
   else{
      document.getElementById("pas").style.border= "2px solid green";
      document.getElementById("paserr").innerHTML="completed"
      document.getElementById("paserr").style.color="chartreuse"
      return false;
   }
   
}