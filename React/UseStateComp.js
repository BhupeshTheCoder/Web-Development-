import React, { useState } from 'react';

const UseStateComp = () => {
    const [salary,setSalary] = useState(10000);
    const [myName,setMyName] = useState("Panchashil");

    return (
        <div>
            <h2>This is useState Hook Component</h2>
            <p>
                My Name is :<strong>{myName}</strong> {" "}
                <button type='button' onClick={()=>setMyName("Panchashil Wankhede")}>change name</button>
            </p>
            <p>My Salary Salary:<strong>{salary}</strong> {" "}
            <button type='button' onClick={()=>setSalary(salary+5000)}>salary++</button>
            </p>
            
        </div>
    )
}

export default UseStateComp
