import React, { createContext, useState ,useEffect } from 'react';
export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const [orders, setOrders] = useState(() => {
        const storedItems = localStorage.getItem('orders');
        return storedItems ? JSON.parse(storedItems) : [];
    });

   
    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
      }, [orders]);
    
      
      const addOrder = (order) => {
        setOrders([...orders, order]);

      };


    return (
        <OrderContext.Provider value={{ orders, addOrder }}>
            {children}
        </OrderContext.Provider>
    );
};