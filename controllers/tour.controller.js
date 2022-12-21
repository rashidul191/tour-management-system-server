const { successStatus, failStatus } = require("../middleware/resStatus");
const { getTourService, postTourService } = require("../services/tourService");

// get tour
module.exports.getTour = async (req, res, next) => {
  try {
    const result = await getTourService();
    res.status(200).json(successStatus(result));
  } catch (error) {
    next();
    res.status(400).send(failStatus(error));
  }
};

module.exports.postTour = async (req, res, next) => {
  try {
    const tour = await postTourService(req.body);
    res.status(200).json(successStatus(tour));
  } catch (error) {
    res.status(400).send(failStatus(error));
  }
};
