const Tour = require("../models/Tour");

module.exports.getTourService = async () => {
    const toursData = await Tour.find({})
    return toursData
};

module.exports.postTourService = async (data) => {
    const createTour = await Tour.create(data)
}
