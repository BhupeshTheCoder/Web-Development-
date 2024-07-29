import React, { Component } from 'react'


class EmpComp extends Component {
    constructor(props) {
        super(props)

this.state = {
    empDetails :[
       {id:101,name:"Ram",post:"Manager",city:"Ratlam"},
       {id:102,name:"Pranav",post:"Software",city:"Indore"},
       {id:103,name:"kartik",post:"Technical",city:"Dewas"},
       {id:104,name:"Deepesh",post:"Admin",city:"Indore"},
       {id:105,name:"Rohit",post:"Marketing Head",city:"Neemuch"},
       {id:106,name:"Sam",post:"Clerk",city:"Pune"},
       
   ]
}

    }



    render() {
        const {empDetails} = this.state;
        return (
            <div>
                <h2>This is Emply sheet</h2>
                <table border="all">
                    <thead>
                        <tr>
                        <th>Id</th> <th>Name</th> <th>Post</th> <th>City</th>
                        </tr>
                    </thead>
                    {
                    
                    
                    empDetails.map((val,index)=>{
                         return (<tbody>
                                     <tr>
                                        <td>{val.id}</td> 
                                        <td>{val.name}</td> 
                                        <td>{val.post}</td> 
                                        <td>{val.city}</td> 
                                        </tr>   
                         </tbody>)
                         
                        // return <td key={index} {val.name} >{val.name}</td>
                       }) 
                    }
                    
                </table>
            </div>
        )
    }
}

export default EmpComp

