import React, { createContext, useState, useEffect } from "react";
export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState(() => {
    const storedItems = localStorage.getItem("basketItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }, [basketItems]);

  const addToBasket = (product) => {
    
    setBasketItems([...basketItems, product]);
    
  };

  const removeFromBasket = (item) => {
    const updatedBasketItems = basketItems.filter(
      (basketItem) => basketItem.id !== item.id
    );
    setBasketItems(updatedBasketItems);
  };
 const total =()=>{
  let totalPrice = 0;

    basketItems.forEach((item) => {
      totalPrice += item.price;
    });

    return totalPrice;
 }
  return (
    <BasketContext.Provider
      value={{ basketItems, addToBasket, removeFromBasket,total }}
    >
      {children}
    </BasketContext.Provider>
  );
};
