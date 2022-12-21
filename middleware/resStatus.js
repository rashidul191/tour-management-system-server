// success status
module.exports.successStatus = (data) => {
  return {
    status: "success",
    message: "Successfully data found",
    data: data,
  };
};

// fail status
module.exports.failStatus = (error) => {
  return {
    status: "fail",
    message: "can't get / post the data",
    error: error.message,
  };
};
