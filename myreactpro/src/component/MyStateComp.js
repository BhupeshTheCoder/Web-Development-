import React, { Component } from 'react'

export class MyStateComp extends Component {

    //constructor
    constructor(props) {
        super(props)
    
        this.state = {
             name:"abc", post:"xyz", salary:1111
        }
    }
    

    render() {
        const {name,post,salary} = this.state;
        return (
            <div>
                <h2>This is my State Component</h2>
                <h3>My name is{this.state.name} Post{this.state.post} Salary{this.state.salary}</h3>
                {/* by using destructuring */}
                <h3>My name is:{name} Post:{post} Salary:{salary}</h3>  

                <p>My Address:{this.props.address} Country:{this.state.props}</p>
                


            </div>
        )
    }}

export default MyStateComp
