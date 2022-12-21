const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    img: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: [true, "Please provide a name for this tour"],
      trim: true,
      minLength: [3, "Name must be a last 3 characters."],
      maxLength: [200, "Name is too large."],
    },
    tourLocation: {
      type: String,
      required: [true, "Please provide a location for this tour"],
      trim: true,
      minLength: [5, "Location must be a last 3 characters."],
    },

    price: {
      type: Number,
      required: true,
      min: [0, "Price can't be negative"],
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      enum: {
        values: ["couple-package", "family-package", "domestic-package"],
        message: "Status can't be {VALUE}",
      },
    },
    features: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      minLength: [5, "Location must be a last 3 characters."],
    },
  },
  // default get date mongoose
  { timestamps: true }
);

const Tour = mongoose.model("tour", tourSchema);
module.exports = Tour;
