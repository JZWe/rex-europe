import { useAgeGroup } from './AgeGroupContext';
import { PlusIcon } from '@heroicons/react/24/solid';
import './NewAgeGroupPriceItem.css';

function NewAgeGroupPriceItem({ onChange }) {
  const { addListItem } = useAgeGroup();

  return (
    <button className="new-btn" onClick={addListItem}>
      <PlusIcon />
      <span>新增價格設定</span>
    </button>
  );
}

export default NewAgeGroupPriceItem;
