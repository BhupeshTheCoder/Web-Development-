import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           empName:"Aakash",
           empSalary:85000  
        }
    }

    incrementSalary = ()=>{
        this.setState((prevSate)=>({empSalary:prevSate.empSalary+1000}));
    }
    
    render() {
        const {empName,empSalary} = this.state;
        return (
            <div>
             <h2>This is Parent Component</h2>   
             <p>Name :<strong>{empName}</strong></p>
             <p>Salary:<strong>{empSalary}</strong></p>
             
             <button type='button' onClick={()=>this.incrementSalary()}>increment Salary</button>
             <hr/>
             <ChildComp name={empName} salary={empSalary} incSalary={this.incrementSalary}></ChildComp>
            </div>
        )
    }
}

export default ParentComp
