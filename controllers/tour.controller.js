const { successStatus, failStatus } = require("../middleware/resStatus");
const { count } = require("../models/Tour");
const Tour = require("../models/Tour");
const {
  getTourService,
  postTourService,
  getTourServiceById,
  updateTourServiceById,
  getCheapestTourService,
} = require("../services/tourService");

// get tour
module.exports.getTour = async (req, res, next) => {
  try {
    const filters = { ...req.query };
    // // sort, page, limit, select => exclude
    const excludeFields = ["sort", "page", "limit", "select", "fields"];
    excludeFields.forEach((field) => delete filters[field]);
    let queries = {};
    // sort
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    // select // fields
    if (req.query.select || req.query.fields) {
      if (req.query.select) {
        const selectBy = req.query.select.split(",").join(" ");
        queries.filterBy = selectBy;
      } else {
        const fieldsBy = req.query.fields.split(",").join(" ");
        queries.filterBy = fieldsBy;
      }
    }
    // page
    if (req.query.page || req.query.limit) {
      // page = 1, limit = 10 set a default value
      const { page = 1, limit = 10 } = req.query;
      const pageBy = (page - 1) * parseInt(limit);
      queries.pageBy = pageBy;
      queries.limitBy = limit;
    }
    const result = await getTourService(filters, queries);
    res.status(200).json(successStatus(result));
  } catch (error) {
    next();
    res.status(400).send(failStatus(error));
  }
};

// post tour
module.exports.postTour = async (req, res, next) => {
  try {
    const tour = await postTourService(req.body);
    res.status(200).send(successStatus(tour));
  } catch (error) {
    next();
    res.status(400).send(failStatus(error));
  }
};

// get tour by id
// let count = 0;
module.exports.getTourById = async (req, res, next) => {
  try {
    // count++;
    // console.log(count);

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

// cheapest tour
module.exports.getCheapestTour = async (req, res, next) => {
  try {
    const cheapestTour = await getCheapestTourService();
    res.status(200).json(successStatus(cheapestTour));
  } catch (error) {
    next();
    res.status(400).send(failStatus(error));
  }
};
