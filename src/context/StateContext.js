import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar((prevSideBar) => !prevSideBar);
  };
  return (
    <Context.Provider
      value={{
        sideBar,
        toggleSideBar,
        setSideBar,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
