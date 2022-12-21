const express = require("express");
const tourController = require("../../controllers/tour.controller");
const { viewCount } = require("../../middleware/viewCount");
const router = express.Router();

router.route("/cheapest").get(tourController.getCheapestTour);

router.route("/").get(tourController.getTour).post(tourController.postTour);

router
  .route("/:id")
  .get(tourController.getTourById)
  .patch(tourController.updateTourById);

module.exports = router;
