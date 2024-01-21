// Cartnum.js
import React, { useState, createContext } from "react";

const UserContext = createContext();

const Cartnum = ({ children }) => {
  const [cartitems, setcart] = useState([]);
  const increment = (props) => {
    setcart((previousState) => {
      console.log(previousState);
      return [...previousState, props];
    });
  };

  return (
    <UserContext.Provider value={{ cartitems, increment }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, Cartnum };
