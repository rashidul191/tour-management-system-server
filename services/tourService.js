const { updateTourByIdCount } = require("../controllers/tour.controller");
const Tour = require("../models/Tour");

module.exports.getTourService = async (filters, queries) => {
  const toursData = await Tour.find(filters)
    .skip(queries.pageBy)
    .limit(queries.limitBy)
    .select(queries.filterBy)
    .sort(queries.sortBy);

  const total = await Tour.countDocuments(filters);
  const page = Math.ceil(total / queries.limitBy);
  return { total, page, toursData };
};

module.exports.postTourService = async (data) => {
  const createTour = await Tour.create(data);
  // console.log(createTour);
  return createTour;
};
module.exports.getTourServiceById = async (id) => {
  const tourById = await Tour.findById(id);
  return tourById;
};

module.exports.updateTourServiceById = async (req) => {
  const updateTourById = await Tour.updateOne(
    { _id: req.params.id }, // which will be to update?
    { $set: req.body }, // what will be the update?
    { runValidators: true } // update validate
  );
  return updateTourById;
};

module.exports.getCheapestTourService = async () => {
  const cheapestTour = await Tour.find({}).limit(3).sort("price");
  return cheapestTour;
};
