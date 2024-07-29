import react, { Component } from 'react';

class ClassComp extends Component{

    render(props){
        return (<div>
        <h2>This is Class Component</h2>
        <p>My Name is :<strong>{this.props.dtmyName}</strong>, <strong>{this.props.dtcontact}</strong>, <strong>{this.props.dtaddress}</strong>, <strong>{this.props.dtgender}</strong>, <strong>{this.props.dteducation}</strong></p>
        </div>)
    }
}
export default ClassComp;