import React, { Component } from 'react'

class Incdec extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             counter:0
        }
    }
    
    // inc = ()=>{
    // this.setState({counter:this.state.counter+1});
    //  //this.setState((prevstate)=>({salary:prevstate.salary+1})); 
    // }

    render() {
        return (
            <div>
                <h2>This is SetState Component</h2>
                <p>Counter is :<strong>{this.state.counter}</strong> </p>
                <button type='button' className='btn btn-outline-primary' onClick={()=>this.setState({counter:this.state.counter+1})}>Increment</button> {" "}
               
               <button type='button' className='btn btn-outline-primary' onClick={()=>this.setState({counter:this.state.counter+1})}>Decrement</button>
            </div>
        )
    }
}

export default Incdec

