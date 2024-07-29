class Student{
    //  stId;
    //  stdName;
    //  stdContact;
    //  stdAddress;
    //  stdGrade;
    
     constructor(id,name,conatct,address,grade){
        this.stId=id;
        this.stdName=name;
        this.stdContact=conatct;
        this.stdAddress=address;
        this.stdGrade=grade;
     }
     StudentDetails(){
     console.log(`ID:${this.stId} Name:${this.stdName} Contact:${this.stdContact} Address:${this.stdAddress} Grade:${this.stdGrade}`)
     }
}

let stdobj = new Student(101,"Ram",999,"xyz","A");
stdobj.StudentDetails();
module.exports = Student;   