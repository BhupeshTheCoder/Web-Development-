import React from 'react'
import './external.css';
import mymodule from './mycss.module.css';

const MyCssCom = () => {
    let mycssPropery = {
        color: true ? "red" : "green",
        fontSize: false ? "25px" : "30px",
        backgroundColor: false ? "lightgray" : "dodgerblue"
    }
    return (
        <div>
            {/* use of internal css  */}
            <h2 style={{ color: "blue", backgroundColor: "aqua", textAlign: "center" }}>This is mycss Component</h2>
            <p style={mycssPropery}>You All are good Students</p>
            {/* use of external css  */}
            <div className='txtPrimary'>You Are Indias Future</div>
            <div className='txtSuccess'>Don't Compare Yourself with others</div>
             {/* use of module css  */}
             <div className={mymodule.box}>Hello Everyone</div>
        </div>
    )
}

export default MyCssCom
