import AgeGroupPriceItem from './AgeGroupPriceItem';
import { useAgeGroup } from './AgeGroupContext';

function AgeGroupPriceList({ onChange }) {
  const { list, setList } = useAgeGroup();

  return list.map((item, index) => (
    <AgeGroupPriceItem
      key={item.id}
      id={item.id}
      num={index + 1}
      onItemChange={({ id, ...fields }) => {
        const nextList = list.map((item) => {
          if (item.id === id)
            return {
              id: item.id,
              data: {
                ...item.data,
                ...fields,
              },
            };
          else return item;
        });
        setList(nextList);

        onChange(nextList.map((item) => item.data));
      }}
    />
  ));
}

export default AgeGroupPriceList;
