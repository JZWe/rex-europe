import { useAgeGroup } from './AgeGroupContext';
import { PlusIcon } from '@heroicons/react/24/solid';
import { MIN, MAX } from '../utils/getNumberIntervals';
import './NewAgeGroupPriceItem.css';

function NewAgeGroupPriceItem() {
  const { list, addListItem } = useAgeGroup();
  const isDisabled = list.some(
    (item) => item.data.ageGroup?.[0] === MIN && item.data.ageGroup?.[1] === MAX
  );

  return (
    <button className="new-btn" disabled={isDisabled} onClick={addListItem}>
      <PlusIcon />
      <span>新增價格設定</span>
    </button>
  );
}

export default NewAgeGroupPriceItem;
