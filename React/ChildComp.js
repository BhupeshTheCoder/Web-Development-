import React from 'react'

const ChildComp = (props) => {
    return (
        <div>
            <h2>This is child Component</h2>
            <p>My Name is :{props.name}</p>
            <p>My Salary:{props.salary}</p>
            <button type='button' onClick={()=>props.incSalary()}>salary++</button>
        </div>
    )
}

export default ChildComp
