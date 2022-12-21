const express = require("express");
const tourController = require("../../controllers/tour.controller");

const router = express.Router();

router.route("/").get(tourController.getTour).post(tourController.postTour);

router.route("/:id").get(tourController.getTourById).patch(tourController.updateTourById);

module.exports = router;
