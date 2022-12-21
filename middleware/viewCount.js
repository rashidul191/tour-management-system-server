let count = 0;
module.exports.viewCount = async (req, res, next) => {
  count++;
  console.log(count);
  next();
};
