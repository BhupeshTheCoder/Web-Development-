import React, { Component } from 'react'

class SetStateComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             salary:50000
        }
    }
    
    incrementSalary = ()=>{
    //    this.setState({salary:this.state.salary+5000});
    this.setState((prevstate)=>({salary:prevstate.salary+5000})); 
    }

    render() {
        return (
            <div>
                <h2>This is SetState Component</h2>
                <p>Salary is :<strong>{this.state.salary}</strong> </p>
                <button type='button' className='btn btn-outline-primary' onClick={()=>this.incrementSalary()} >Increment Salary</button> {" "}
               
               <button type='button' className='btn btn-outline-primary' onClick={()=>this.setState({salary:this.state.salary+5000})}>salary++</button>
            </div>
        )
    }
}

export default SetStateComp
