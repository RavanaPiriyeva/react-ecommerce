import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [users, setUsers] = useState(() => {
        const storedItems = localStorage.getItem('regiteruser');
        return storedItems ? JSON.parse(storedItems) : [];
    });
    useEffect(() => {
        localStorage.setItem('regiteruser', JSON.stringify(users));
    }, [users]);
    const [message, setMessage] = useState("")
    const addUser = (user) => {
        if (!users.some((item) => item.email == user.email)) {
            setUsers([...users, user]);
            setMessage("")
            return true
        }
        else {
            setMessage("Bu email artıq qeydiyyatdan keçib !!!")
            return false
        }

    };


    return (
        <LoginContext.Provider value={{ users, addUser, setUsers, message }}>
            {children}
        </LoginContext.Provider>
    );
};