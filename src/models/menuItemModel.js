const mongoose = require("mongoose");
const { Schema } = mongoose;

const MenuItemSchema = new Schema({
  restaurantId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Restaurant",
    required: true,
    index: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  description: {
    type: String,
    maxlength: 300,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    maxlength: 50,
  },
  image: {
    type: String, // URL to the menu item's image
  },
  availability: {
    type: Boolean,
    default: true,
  },
  preparationTime: {
    type: Number, // in minutes
    min: 0,
  },
  nutritionalInfo: {
    calories: {
      type: Number,
      min: 0,
    },
    ingredients: [
      {
        type: String,
      },
    ],
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

const MenuItem = mongoose.model("MenuItem", MenuItemSchema);

module.exports = MenuItem;
