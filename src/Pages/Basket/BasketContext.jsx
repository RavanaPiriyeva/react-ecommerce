import React, { createContext, useState ,useEffect } from 'react';
export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
    const [basketItems, setBasketItems] = useState(() => {
        const storedItems = localStorage.getItem('basketItems');
        return storedItems ? JSON.parse(storedItems) : [];
    });
    const [addCheck, setaddCheck] = useState(true)
    useEffect(() => {
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
      }, [basketItems]);
    
      
      const addToBasket = (product) => {
        setBasketItems([...basketItems, product]);
        setaddCheck(false)

      };
    
      const removeFromBasket = (item) => {
        const updatedBasketItems = basketItems.filter(
          (basketItem) => basketItem.id !== item.id
        );
        setBasketItems(updatedBasketItems);
        setaddCheck(true)

      };

    return (
        <BasketContext.Provider value={{ basketItems, addToBasket, removeFromBasket ,addCheck }}>
            {children}
        </BasketContext.Provider>
    );
};