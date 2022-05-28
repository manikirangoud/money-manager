import React from 'react'
import { useDispatch } from 'react-redux';
import { updateIsAuthenticatedInit } from '../redux/actions/userActions';

const Authentication: React.FC<> = () => {

    const dispatch = useDispatch();

    const onSecretPinChange = (v) =>{
        if(Number(v) === 135790){
            dispatch(updateIsAuthenticatedInit(true));
        }
    }

    return(
        <>
            <input id="secretPin" type={"number"} onChange={(e) => {onSecretPinChange(e.target.value)}} style={{margin: "3rem" }}></input>
        </>
    );
}


export default Authentication;