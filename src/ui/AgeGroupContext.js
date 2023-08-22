import { useContext, createContext, useState, useEffect } from 'react';
let id = 0;
export const AgeGroupContext = createContext(null);

export function AgeGroupContextProvider({ children }) {
  const [list, setList] = useState([]); // [{ id: number, data: { ageGroup: Array<number>, price: number  }}]

  const addListItem = () => {
    id++;
    setList((prevList) => [
      ...prevList,
      { id: id, data: { ageGroup: null, price: null } },
    ]);
  };

  const deleteListItem = (id) =>
    setList((prevList) => prevList.filter((item) => item.id !== id));

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <AgeGroupContext.Provider
      value={{
        list,
        setList,
        addListItem,
        deleteListItem,
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
