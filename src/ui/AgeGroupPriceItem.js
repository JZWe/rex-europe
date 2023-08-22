import PriceInput from './PriceInput';
import AgeGroupSelect from './AgeGroupSelect';
import './AgeGroupPriceItem.css';

function AgeGroupPriceItem({ id, onItemChange }) {
  return (
    <div className="agegroup-priceitem">
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
