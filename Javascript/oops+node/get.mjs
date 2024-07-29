
class Result{
     physics;chemistry;math;
     constructor(p,c,m){
        this.physics=p;
        this.chemistry=c;
        this.math=m;

     }

     percentage(){
        let total= this.physics+this.chemistry+this.math;
        let percent=(total/3);
        return percent;
     }
     resultDetails(){
        console.log(`Physics:${this.physics} Chemistry:${this.chemistry} MAthematics:${this.math} Percentage:${this.percentage()}`)
     }
}
export default Result;