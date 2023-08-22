import { useState } from 'react';
import addComma from '../utils/addComma';
import './PriceInput.css';

function PriceInput({ onInputChange, id }) {
  const [price, setPrice] = useState('0');
  const error = price.trim() === '' ? '不可以為空白' : null;

  const onChange = (e) => {
    const inputArr = Array.from(e.target.value);
    const isDoubleDot = inputArr.filter((char) => char === '.').length >= 2;
    const hasAlphabetRegex = /[a-zA-Z]/g;
    const hasSpecialCharacterRegex = /[`$&+:;=?@#|'<>^*()%!-]/g;
    const hasCommaInDecimal = e.target.value.split('.')[1]
      ? e.target.value.split('.')[1].indexOf(',') !== -1
      : false;

    if (
      isDoubleDot ||
      hasCommaInDecimal ||
      hasAlphabetRegex.test(e.target.value) ||
      hasSpecialCharacterRegex.test(e.target.value) ||
      e.target.value.indexOf(' ') !== -1
    ) {
      return;
    }

    let integer = e.target.value.split('.')[0];
    const decimalPoint = e.target.value.split('.')[1];
    let priceStr = '';

    const hasCommaRegex = /,/g;

    if (hasCommaRegex.test(integer)) {
      integer = integer.split(',').join('');
    }

    if ([...e.target.value].find((char) => char === '.')) {
      priceStr = decimalPoint ? `${integer}.${decimalPoint}` : `${integer}.`;
    } else {
      priceStr = `${integer}`;
    }

    setPrice(addComma(priceStr));
    onInputChange(Number(priceStr));
  };

  return (
    <div className="price-input-container">
      <label htmlFor={`price-input-${id}`} className="label">
        入住費用 (每人每晚)
      </label>
      <div className="currency-price">
        <div className="currency">NTD</div>
        <input
          id={`price-input-${id}`}
          className={error ? 'price-input error' : 'price-input'}
          placeholder="請輸入費用"
          onChange={onChange}
          value={price}
          type="text"
        />
      </div>

      {error ? <span className="error-msg">{error}</span> : null}
      <span className="prompt">輸入 0 表示免費</span>
    </div>
  );
}

export default PriceInput;
