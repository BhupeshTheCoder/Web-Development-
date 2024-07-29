const MyDetails=(props)=>{
    return( 
    <div>
    <h2>Details</h2>
    <p>My Name is :<strong>{props.myName}</strong>, 
    <strong>{props.contact}</strong>,
    <strong>{props.address}</strong>,
    <strong>{props.dtgender}</strong>,
    <strong>{props.dteducation}</strong>
    </p>
    </div>);

}

export default MyDetails;