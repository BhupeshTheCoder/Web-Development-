import React, { useEffect, useState } from 'react'

const UseEffectHookComp = () => {
    const [count,setCount] = useState(0)
    const [salary,setSalary] = useState(1000);
    //1. no dependency  value pass
    // useEffect(()=>{
    // //   setCount(count+1)
    // })

     //2. when dependency  value pass as []
    // useEffect(()=>{
    //    setCount(count+1)
    // },[]);

     //3. when we passdependency value
    useEffect(()=>{
       setCount(count+1)
    },[salary]);

    return (
        <div>
            <h2>This is UseEffect Hook Component</h2>
            <h2>Count is :{count} </h2>
            <h2>Salary is :{salary} </h2>
            <button type='button' onClick={()=>setSalary(salary+1000)} className='btn btn-primary'>salary ++</button>
        </div>
    )
}

export default UseEffectHookComp
