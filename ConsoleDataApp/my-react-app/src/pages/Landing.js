import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../hooks/UserContext';
import Navbar from '../components/Navbar'
import Console from '../components/Console'

export default function Landing() {
    const { user } = useContext(UserContext);
        if(user) {
            return (
                <Redirect to='/home'/> 
            )
        }

    return(
        <div>
            <Navbar />
        </div>
    )
}