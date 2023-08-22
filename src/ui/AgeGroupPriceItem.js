import PriceInput from './PriceInput';
import AgeGroupSelect from './AgeGroupSelect';
import DeleteAgeGroupPriceItem from './DeleteAgeGroupPriceItem';
import './AgeGroupPriceItem.css';

function AgeGroupPriceItem({ id, onItemChange }) {
  return (
    <div className="agegroup-priceitem">
      <DeleteAgeGroupPriceItem id={id} />
      <AgeGroupSelect
        onSelectChange={(ageGroup) => onItemChange({ id, ageGroup })}
      />
      <PriceInput
        id={id}
        onInputChange={(price) => onItemChange({ id, price })}
      />
    </div>
  );
}

export default AgeGroupPriceItem;
