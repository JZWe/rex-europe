import { useAgeGroup } from './AgeGroupContext';

function NewAgeGroupPriceItem({ onChange }) {
  const { addListItem } = useAgeGroup();

  return <button onClick={addListItem}>新增價格設定</button>;
}

export default NewAgeGroupPriceItem;
