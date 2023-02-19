const removeDecimalPlaces = (num) => {
  const numString = num.toString();
  const decimalIndex = numString.indexOf(".");
  if (decimalIndex === -1) {
    return num;
  }
  if (numString.length - decimalIndex <= 6) {
    return num;
  }
  return parseFloat(numString.substring(0, decimalIndex + 7));
};

export default removeDecimalPlaces;
