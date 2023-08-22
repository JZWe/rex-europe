import { useState } from 'react';
import './AgeGroupSelect.css';
import { MIN, MAX, DIFF } from '../utils/getNumberIntervals';
import { useAgeGroup } from './AgeGroupContext';

function getDisabledResult(startAge, endAge) {
  let disabledResult = [null, null];
  if (startAge || endAge) {
    if (startAge === MIN && endAge === MAX) {
      disabledResult = [null, null];
    } else if (!endAge) {
      disabledResult = [null, [MIN, startAge - 1]]; // [null, [0, 5]]
    } else if (!startAge) {
      disabledResult = [[endAge + 1, MAX], null]; // [[16, 20], null]
    } else {
      disabledResult = [
        [endAge + 1, MAX],
        [MIN, startAge - 1],
      ];
    }
  }
  return disabledResult;
}

function AgeGroupSelect({ id, onSelectChange }) {
  const [startAge, setStartAge] = useState('');
  const [endAge, setEndAge] = useState('');
  const disabledResult = getDisabledResult(startAge, endAge);
  const { overlap } = useAgeGroup();
  const hasError = overlap.some((lapItem) =>
    lapItem.find((age) => startAge === age || endAge === age)
  );

  return (
    <div className="age-group-select">
      <span className="label">年齡</span>
      <div className="selects">
        <select
          name={`startage-${id}`}
          id={`startage-${id}`}
          value={startAge}
          className={hasError ? `select error` : `select`}
          onChange={(e) => {
            const nextStartAge = Number(e.target.value);
            setStartAge(nextStartAge);
            onSelectChange?.([nextStartAge, endAge === '' ? null : endAge]);
          }}
        >
          <option value="">-----</option>
          {Array.from({ length: DIFF }, (value, index) => (
            <option
              key={`start-${index}`}
              value={index}
              disabled={
                disabledResult[0] === null
                  ? false
                  : disabledResult[0][0] <= index &&
                    index <= disabledResult[0][1]
              }
            >
              {index}
            </option>
          ))}
        </select>
        <div className="connect">~</div>
        <select
          name={`endage-${id}`}
          id={`endage-${id}`}
          value={endAge}
          className={hasError ? `select error` : `select`}
          onChange={(e) => {
            const nextEndAge = Number(e.target.value);
            setEndAge(nextEndAge);
            onSelectChange?.([startAge === '' ? null : startAge, nextEndAge]);
          }}
        >
          <option value="">-----</option>
          {Array.from({ length: DIFF }, (value, index) => (
            <option
              key={`end-${index}`}
              value={value}
              disabled={
                disabledResult[1] === null
                  ? false
                  : disabledResult[1][0] <= index &&
                    index <= disabledResult[1][1]
              }
            >
              {index}
            </option>
          ))}
        </select>
      </div>
      {hasError ? <span className="error-msg">年齡區間不可重疊</span> : null}
    </div>
  );
}

export default AgeGroupSelect;
