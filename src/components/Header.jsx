import React from 'react'
import { Link } from 'react-router-dom';

const Header: React.FC<> = (props) => {

    return(
        <div className='d-flex header justify-content-around' style={{minHeight: '10vh'}}>
            <div className='header'>Money Manager</div>
            <div>
                <Link to={'/'} className="me-5">Home</Link>
                <Link to={'/history'}>History</Link>
            </div>  
        </div>
    );
}


export default Header;