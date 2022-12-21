const { successStatus, failStatus } = require("../middleware/resStatus");
const {
  getTourService,
  postTourService,
  getTourServiceById,
  updateTourServiceById,
} = require("../services/tourService");

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

// post tour
module.exports.postTour = async (req, res, next) => {
  try {
    // console.log(req.body);
    const tour = await postTourService(req.body);
    res.status(200).json(successStatus(tour));
  } catch (error) {
    next();
    res.status(400).send(failStatus(error));
  }
};

// get tour by id
module.exports.getTourById = async (req, res, next) => {
  try {
    const tourById = await getTourServiceById(req.params.id);
    res.status(200).json(successStatus(tourById));
  } catch (error) {
    next();
    res.status(400).send(failStatus(error));
  }
};

// update tour by id
module.exports.updateTourById = async (req, res, next) => {
  try {
    const updateTourById = await updateTourServiceById(req);
    res.status(200).json(successStatus(updateTourById));
  } catch (error) {
    next();
    res.status(400).send(failStatus(error));
  }
};
