import { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function useFindUser() {
    const [user, setUser] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() =>{
        async function findUser() {
        await axios.get('http://localhost:8000/user')
        .then(res => {
            setUser(res.data.currentUser);
            setLoading(false);
        }).catch(err => {
            console.log(err);
            setLoading(false);
        });
        }
        
        findUser();  
    }, []);
    
    return {
        user,
        setUser,
        isLoading
    }
}