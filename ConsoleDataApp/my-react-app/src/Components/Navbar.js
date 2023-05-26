import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';
import useLogout from './../hooks/useLogout';

export default function Header() {
    const { user } = useContext(UserContext);
    const { logoutUser } = useLogout(); 
    
    return(
        <nav>
            <img className="logo" src={require('../images/controller.png')} alt="gaming"></img>
            <h2 className="nav-heading">the gamer hub.</h2>
            {user == null 
            ? <>
                <button className='button' onClick={logoutUser} >logout</button>
            </>
           : <div>
                <Link to = "/login"> 
                    <button className='button'>login</button>
                </Link>
                <Link to = "/register"> 
                    <button className="button">register</button>
                </Link>
            </div>
            }
        </nav>
    )
}