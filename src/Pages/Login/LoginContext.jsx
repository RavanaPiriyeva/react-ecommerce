import React, { createContext, useState ,useEffect } from 'react';
export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [users, setUsers] = useState(() => {
        const storedItems = localStorage.getItem('regiteruser');
        return storedItems ? JSON.parse(storedItems) : [];
    });
    const [addCheck, setaddCheck] = useState(true)
    useEffect(() => {
        localStorage.setItem('regiteruser', JSON.stringify(users));
      }, [users]);
    
      
      const addUser = (user) => {
        setUsers([...users, user]);
        setaddCheck(false)

      };


    return (
        <LoginContext.Provider value={{ users, addUser,setUsers }}>
            {children}
        </LoginContext.Provider>
    );
};