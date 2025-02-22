const validatePositiveInt = (input) => {
  const num = parseInt(input);
  return !isNaN(num) && input == num && num > 0;
};

export default validatePositiveInt;