const validateFloat = (input) => {
  const num = parseFloat(input);
  return !isNaN(num) && input == num;
}

export default validateFloat;