export const validateInput = (question, vars, input) => {
  // If it's empty
  if (!input) {
    const error = 'This field is required!';
    return {error, status: false};
  }
  // else if it has a 'min' option
  else if (question.min && parseInt(input, 10) < question.min.val) {
    const error = question.min.error;
    return {error, status: false};
  }
  else if (
    question.max &&
    typeof question.max.val === 'string' &&
    parseInt(input, 10) > vars[0]
  )
  {
    const error = question.max.error;
    return {error, status: false};
  }
  else if (question.max && (typeof question.max.val === 'number') &&
    parseInt(input, 10) > question.max.val
  ) {
    const error = question.max.error;
    return {error, status: false};
  }
  return {error: null, status: true};
};
