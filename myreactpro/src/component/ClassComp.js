import react, { Component } from 'react';

class ClassComp extends Component{

    render(){
        return (<div>
        <h2>This is Class Component</h2>
        <p>My Name is :<strong>{this.props.empName}</strong>, I am <strong>{this.props.empPost}</strong></p>
        </div>)
    }
}
export default ClassComp;