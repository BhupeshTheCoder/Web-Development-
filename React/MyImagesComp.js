import React from 'react'
// import dosa from '../shared/images/dosa.jpg'
// import vadapav from '../shared/images/vadapav.jpg';
import assets from '../shared/constant/constantData';

const MyImagesComp = () => {
    return (
        <div>
            <h2>This is MyImages Component</h2>
            {/* <img src={dosa} alt='dosa' height="200px" width="300px" /> {" "}
            <img src={vadapav} alt='vadapav' height="200px" width="300px" /> */}
            <img src={assets.dosa} alt='dosa' height="200px" width="300px" /> {" "}
            <img src={assets.vadapv} alt='vadapav' height="200px" width="300px" /> 
            <hr />
            <video controls src={assets.vdo}></video>
        </div>
    )
}

export default MyImagesComp
