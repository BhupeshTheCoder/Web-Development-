
import React from 'react'

const MethodAndEventsComp = () => {

    const greeting = ()=>{
        window.alert("Good morning Students");
    }
    const welcome = (...std)=>{
        window.alert(`Welcome You ${std} in Infoway`)
    }

    return (
        <div>
            <h2>This is Function Component</h2>
            <button type='button' onClick={()=>greeting()}>Greeting</button> {" "}
            <button type='button' onClick={()=>welcome("Manav","Suraj")}>Welcome</button>
           <h2 onMouseOver={()=>welcome("Manisha","Radha")}>Hover on me to execute welcome function</h2>
        </div>
    )
}

export default MethodAndEventsComp
