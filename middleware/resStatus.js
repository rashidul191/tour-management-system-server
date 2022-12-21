// success status
module.exports.successStatus = (data) => {
  return {
    status: true,
    message: "successful",
    data: data,
  };
};

// fail status
module.exports.failStatus = (error) => {
  return {
    status: false,
    message: "fail",
    error: error.message,
  };
};
