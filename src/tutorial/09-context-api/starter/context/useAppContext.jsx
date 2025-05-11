import { createContext } from "react";
import { useContext } from "react";

export const GlobalContext = createContext();

export const AppContext = ({ children, value }) => {
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
