const readingTime = (body) => {
  const noOfWords = body.split(" ").length;
  // assuming the average person reads 180 words a minute
  const reading_time = noOfWords / 180;
  return Math.ceil(reading_time);
};

module.exports = { readingTime };
