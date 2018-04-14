export default (seconds) => {
  if (!Number.isInteger(seconds) || seconds <= 0) {
    return -1;
  }
  let time = seconds;
  let message = ``;
  --time;
  if (time === 0) {
    message = `Время иссякло`;
  }
  return {time, message};
};
