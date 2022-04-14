import React, { useContext, useEffect, useState } from 'react';
import service from './service';

// Discutir mejores soluciones/architectura 
// para guardar un token de session
// Discutir caso de uso: autorized-role
// ó show/hide privileged views

const SessionContext = React.createContext()

export function useSession() {
    return useContext(SessionContext);
}

export function SessionProvider({ children }) {
    const [token, setToken] = useState();

    const login = async (credentials) => {
        const { token } = await service.login(credentials)
        localStorage.setItem('token', token)
        setToken(token)
    };

    const logout = () => {
        localStorage.removeItem('token')
        setToken(null)
    };

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
        return () => { }
    }, []);

    return <SessionContext.Provider
        value={{ token, logout, login }}>
        {children}
    </SessionContext.Provider>;
}

export function WithSession({ children }) {
    const { token } = useContext(SessionContext);
    if (token) {
        return children;
    }
    return null;
}

export function WithoutSession({ children }) {
    const { token } = useContext(SessionContext);
    if (!token) {
        return children;
    }
    return null;
}