import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext(null);
const DataProvider = ({ children }) => {
  const [account, setAccount] = useState("");
  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
