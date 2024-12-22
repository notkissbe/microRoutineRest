import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Logout() {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.removeItem('jwt');
            navigate('/login');
        }, 1000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            <h1>Logging out...</h1>
        </div>
    );
};

export default Logout;