import { useContext, createContext, useState } from 'react';

export const AgeGroupContext = createContext(null);

export function AgeGroupContextProvider({ children }) {
  const [list, setList] = useState([]); // [{ ageGroup: Array<number>, price: number }]
  const addListItem = () =>
    setList((prevList) => [...prevList, { ageGroup: null, price: null }]);

  return (
    <AgeGroupContext.Provider
      value={{
        list,
        setList,
        addListItem,
      }}
    >
      {children}
    </AgeGroupContext.Provider>
  );
}

export function useAgeGroup() {
  const context = useContext(AgeGroupContext);
  if (!context) throw new Error('AgeGroupContext is not defined');
  return context;
}
