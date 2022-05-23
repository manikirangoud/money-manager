import React from 'react'

const Authentication: React.FC<> = (props) => {

    const onSecretPinChange = (v) =>{
        if(Number(v) === 135790){
            props.setAuthenticated(true);
        }
    }

    return(
        <>
            <input id="secretPin" type={"number"} onChange={(e) => {onSecretPinChange(e.target.value)}} style={{margin: "3rem" }}></input>
        </>
    );
}


export default Authentication;