import React, { createContext } from "react";
import useLocalStorage from "../hook/useLocalStorage";

export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  function addBasket(item) {
    const itemIndex = basket.findIndex((x) => x._id === item._id);
    if (itemIndex === -1) {
      setBasket([...basket, { ...item, count: 1 }]);
    } else {
      basket[itemIndex].count++;
      setBasket([...basket]);
    }
  }

  function removeBasket(item) {
    setBasket(basket.filter((x) => x._id !== item._id));
  }

  function decreaseCount(item) {
    const itemIndex = basket.findIndex((x) => x._id === item._id);
    if (basket[itemIndex].count === 1) {
      return;
    } else {
      basket[itemIndex].count--;
      setBasket([...basket]);
    }
  }

  function increaseCount(item) {
    const itemIndex = basket.findIndex((x) => x._id === item._id);
    basket[itemIndex].count++;
    setBasket([...basket]);
  }

  function getTotal() {
    return basket.reduce((amount, x) => x.price * x.count + amount, 0);
  }
  const data = {
    basket,
    addBasket,
    removeBasket,
    decreaseCount,
    increaseCount,
    getTotal
  };
  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  );
}

export default BasketProvider;
