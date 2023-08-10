const textValidation = (text,regex) => {
  return !text || regex.test(text);
};

const NO_EMPTY_REGEX =  /^\s*$/
export { NO_EMPTY_REGEX };
export default textValidation;
