import { useState } from "react";
import { createContext } from "react";

export const DataContext = createContext(null);


const DataProvider = ({ children }) => {
  const [account, setAccount] = useState("");


  const nameInStorage = localStorage.getItem("flipkartUserName")

   if(account.length === 0 && nameInStorage){
       setAccount(nameInStorage)
   }
  

  return (
    <DataContext.Provider value={{ account, setAccount }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
