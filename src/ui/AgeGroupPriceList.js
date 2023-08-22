import { useEffect } from 'react';
import AgeGroupPriceItem from './AgeGroupPriceItem';
import { useAgeGroup } from './AgeGroupContext';

function AgeGroupPriceList({ onChange }) {
  const { list, setList } = useAgeGroup();

  return list.map((_, index) => (
    <AgeGroupPriceItem
      key={index}
      id={index}
      onItemChange={({ id, ...fields }) => {
        const nextList = list.map((item, innerIndex) => {
          if (innerIndex === id)
            return {
              ...item,
              ...fields,
            };
          else return item;
        });
        setList(nextList);
        onChange(nextList);
      }}
    />
  ));
}

export default AgeGroupPriceList;
