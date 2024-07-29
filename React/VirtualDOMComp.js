
import React, { Component } from 'react'

class VirtualDOMComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             courses :[
                {id:101,name:"React"},
                {id:102,name:"Angular"},
                {id:103,name:"Java"},
                {id:104,name:"Python"},
                {id:105,name:"Nodejs"}
            ]
        }
        setTimeout(()=>{
            let corsesArray = this.state.courses;
            let  courseObj =  this.state.courses.find((m)=>m.id===103);
            let courseId = this.state.courses.findIndex((m)=>m.id===103);
            if(courseObj){
              corsesArray.splice(courseId,1,{name:"Advanced Java"});
              this.setState(corsesArray);
            }
        },3000)
    }
    
    render() {
        const {courses} = this.state;
        return (
            <div>
                <h2>This is virtualDOM Component</h2>
                <ul>
                    {
                    courses.map((val,index)=>{
                        // return <li key={val.id}>{val.name}</li>
                        return <li key={index}>{val.name}</li>
                       }) 
                    }
                </ul>
            </div>
        )
    }
}

export default VirtualDOMComp
