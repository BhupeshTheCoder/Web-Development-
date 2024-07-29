function imgChg(){

    
    
    if(document.getElementById("message").innerHTML == "cake"){
    document.getElementById("i1").src="../Assests/images/cupcake.jpg";
    document.getElementById("message").innerHTML = "Cupcake";
    }
    else{
        document.getElementById("i1").src="../Assests/images/cake1.jpg";
        document.getElementById("message").innerHTML = "cake";
    }
}