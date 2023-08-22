import PriceInput from './PriceInput';
import AgeGroupSelect from './AgeGroupSelect';
import DeleteAgeGroupPriceItem from './DeleteAgeGroupPriceItem';
import './AgeGroupPriceItem.css';

function AgeGroupPriceItem({ id, num, onItemChange }) {
  return (
    <div className="agegroup-priceitem">
      <div className="title-delete">
        <h3>價格設定 - {num}</h3>
        <DeleteAgeGroupPriceItem id={id} />
      </div>
      <div className="select-input">
        <AgeGroupSelect
          id={id}
          onSelectChange={(ageGroup) => onItemChange({ id, ageGroup })}
        />
        <PriceInput
          id={id}
          onInputChange={(price) => onItemChange({ id, price })}
        />
      </div>
      <hr />
    </div>
  );
}

export default AgeGroupPriceItem;
