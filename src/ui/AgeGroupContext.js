import { useContext, createContext, useState } from 'react';
import getNumberIntervals from '../utils/getNumberIntervals';

let id = 0;
export const AgeGroupContext = createContext(null);

export function AgeGroupContextProvider({ children }) {
  const [list, setList] = useState([]); // [{ id: number, data: { ageGroup: Array<number>, price: number  }}]

  const addListItem = () => {
    id++;
    setList((prevList) => [
      ...prevList,
      { id, data: { ageGroup: null, price: null } },
    ]);
  };

  const deleteListItem = (id) =>
    setList((prevList) => prevList.filter((item) => item.id !== id));

  const nonEmptyAgeGroups = list
    .filter((item) => {
      if (Array.isArray(item.data.ageGroup)) {
        return item.data.ageGroup.every((groupItem) => groupItem !== null);
      } else {
        return item.data.ageGroup !== null;
      }
    })
    .map((item) => item.data.ageGroup);

  const { overlap } = getNumberIntervals(nonEmptyAgeGroups);

  return (
    <AgeGroupContext.Provider
      value={{
        list,
        setList,
        addListItem,
        deleteListItem,
        overlap,
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
