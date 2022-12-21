const Tour = require("../models/Tour");

module.exports.getTourService = async () => {
  const toursData = await Tour.find({});
  return toursData;
};

module.exports.postTourService = async (data) => {
  const createTour = await Tour.create(data);
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
