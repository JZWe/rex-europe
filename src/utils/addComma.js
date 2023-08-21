function addComma(input) {
  if (Number.isNaN(Number(input))) {
    throw new Error('Please pass parameter in valid structure');
  }

  let comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
  return input.toString().replace(comma, ',');
}

addComma(123456);
