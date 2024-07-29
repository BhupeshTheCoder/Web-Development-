
import React, { Component } from "react";

class MyStateComp extends Component {

    constructor() {
        super();
        this.state = {
            name: "Mayuresh",
            post: "Manager",
            salary: 250000
        }
    }

    render() {
        const { name, post, salary } = this.state; // destructuring of state 
        const { address, single, country } = this.props; // destructuring of props 
        return <div>
            <h2>This is My State Component</h2>
            <h3>My name is :{name}</h3>
            <h3>I am:{post}</h3>
            <h3>My Salary is :{salary}</h3>

            <p>My Address is :{address}, I am Single : {single} , Country:{country}</p>

        </div>
    }
}

export default MyStateComp;