const mongoose = require("mongoose");
const { Schema } = mongoose;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    maxlength: 100,
  },
  description: {
    type: String,
    maxlength: 300,
  },
  location: {
    address: {
      type: String,
      required: true,
      maxlength: 200,
    },
    city: {
      type: String,
      required: true,
      maxlength: 50,
    },
    state: {
      type: String,
      required: true,
      maxlength: 50,
    },
    zipCode: {
      type: String,
      required: true,
      maxlength: 10,
    },
    coordinates: {
      lat: {
        type: Number,
        required: false,
      },
      lng: {
        type: Number,
        required: false,
      },
    },
  },
  contact: {
    phone: {
      type: String,
      required: true,
      maxlength: 20,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 100,
    },
  },
  image: {
    type: String, // URL to the restaurant's image/logo
  },
  categories: [
    {
      type: String,
    },
  ],
  operatingHours: {
    openTime: {
      type: String,
      required: true,
    },
    closeTime: {
      type: String,
      required: true,
    },
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
