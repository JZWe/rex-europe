function addComma(input) {
  let comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
  return input.toString().replace(comma, ',');
}

export default addComma;
