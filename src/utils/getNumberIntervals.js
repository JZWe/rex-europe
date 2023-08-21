function getNumberIntervals(intervals = []) {
  const zeroToTwenty = Array.from({ length: 21 }, (num, index) => []);
  let index = 0;

  if (!Array.isArray(intervals)) {
    throw new Error('Please pass parameter in valid structure');
  }

  for (const [start, end] of intervals) {
    for (let ptr = start; ptr <= end; ptr++) {
      zeroToTwenty[ptr].push(index);
    }
    index++;
  }

  const overlap = [];
  const notInclude = [];

  for (let i = 0; i < zeroToTwenty.length; i++) {
    if (!zeroToTwenty[i].length) {
      let rPtr = i;
      while (Array.isArray(zeroToTwenty[rPtr]) && !zeroToTwenty[rPtr].length) {
        rPtr++;
      }
      notInclude.push([i, rPtr - 1]);
      i = rPtr + 1;
    }
  }

  for (let i = 0; i < zeroToTwenty.length; i++) {
    if (zeroToTwenty[i].length > 1) {
      let rPtr = i;
      while (
        Array.isArray(zeroToTwenty[rPtr]) &&
        zeroToTwenty[rPtr].length > 1
      ) {
        rPtr++;
      }
      overlap.push([i, rPtr - 1]);
      i = rPtr + 1;
    }
  }

  return {
    overlap,
    notInclude,
  };
}

export default getNumberIntervals;
