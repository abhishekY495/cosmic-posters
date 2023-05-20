import { createContext } from "react";
import { postersData } from "../data/postersdata";

export const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
  const categories = postersData.reduce((acc, { category }) => {
    return acc.includes(category) ? acc : [...acc, category];
  }, []);
  return (
    <DataContext.Provider value={{ postersData, categories }}>
      {children}
    </DataContext.Provider>
  );
};
