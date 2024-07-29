class person{
    pName="Swapnil";                //data-member
    pContact=111;
    pGEnder="Male"
    pAddress="Pune"
    
    constructor(name,contact,gender,address){
        this.pName=name;
        this.pContact=contact;
        this.pGEnder=gender;
        this.pAddress=address;
    }

    personDetails(){
        console.log(`Name:${this.pName}, Contact:${this.pContact}, Gender:${this.pGEnder}, Address:${this.pAddress}`)
    };

}

  




// let personObj =new person("Deepesh",11,"Male","Indore");                       //how tocreate object of class
// console.log(personObj.pName);
// personObj.personDetails(); 

// let personObj1 =new person("paranv",555,"Male","Dewas");                       //how tocreate object of class
// // console.log("paranv",555,"Male","Dewas");
// personObj1.personDetails(); 



class Company extends person{
    cName;
    cPost;
    cLocation;
    static cPassword=ABC123;
    
    constructor(name,contact,gender,address,comp,designation,location){
        super(name,contact,gender,address);
        this.cName=comp;
        this.cPost=designation;
        this.cLocation=location;

    }

    personDetails(){
        console.log(`Name:${this.pName}, Contact:${this.pContact}, Gender:${this.pGEnder}, Address:${this.pAddress}, Comapny Name:${this.cName} Post:${this.cPost} Location:${this.cLocation}`)
    };

}


let companyObj = new Company("Shreyansh",12345,"Male","Jagdalpur","cognizant","Manager","Mumbai");
companyObj.personDetails();
