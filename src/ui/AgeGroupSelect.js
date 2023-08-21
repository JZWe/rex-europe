import { useState, useEffect, useMemo } from 'react';
import './AgeGroupSelect.css';

const MIN = 0;
const MAX = 20;
const DIFF = MAX - MIN + 1;

function AgeGroupSelect({ id, onChange }) {
  const [startAge, setStartAge] = useState('');
  const [endAge, setEndAge] = useState('');
  const [hasError, setHasError] = useState(false);

  let disabledResult = useMemo(() => [null, null], []); // [[startAgeStart, startAgeEnd], [endAgeStart, endAgeEnd]]

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

  useEffect(() => {
    onChange?.(disabledResult);
  }, [disabledResult, onChange]);

  return (
    <div className="age-group-select">
      <span className="label">年齡</span>
      <div className="selects">
        <select
          name={`startage-${id}`}
          id={`startage-${id}`}
          value={startAge}
          className={hasError ? `select error` : `select`}
          onChange={(e) => setStartAge(Number(e.target.value))}
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
          onChange={(e) => setEndAge(Number(e.target.value))}
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
