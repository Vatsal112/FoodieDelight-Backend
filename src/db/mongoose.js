const mongoose = require("mongoose");
const Restaurant = require("../models/restaurantModel");
const MenuItem = require("../models/menuItemModel");
const config = require("../config/config");
mongoose.connect(config.MONGODB_URL, {
  autoIndex: true,
  dbName: config.DATABASE_NAME,
});

// Create a new restaurant
// const createRestaurant = async () => {
//   const restaurant = new Restaurant({
//     name: "Pizza Palace",
//     description: "Best pizza in town",
//     location: {
//       address: "123 Pizza St",
//       city: "Pizzaville",
//       state: "CA",
//       zipCode: "12345",
//     },
//     contact: {
//       phone: "555-1234",
//       email: "contact@pizzapalace.com",
//     },
//     image: "http://example.com/pizza-palace.jpg",
//     categories: ["Italian", "Pizza"],
//     operatingHours: {
//       openTime: "10:00 AM",
//       closeTime: "11:00 PM",
//     },
//     isActive: true,
//   });

//   await restaurant.save();
//   console.log("Restaurant created:", restaurant);
//   return restaurant;
// };

// // Add a menu item to the restaurant
// const addMenuItem = async (restaurantId) => {
//   const menuItem = new MenuItem({
//     restaurantId: restaurantId,
//     name: "Margherita Pizza",
//     description:
//       "Classic margherita with fresh tomatoes, basil, and mozzarella",
//     price: 9.99,
//     category: "Pizza",
//     image: "http://example.com/margherita.jpg",
//     availability: true,
//     preparationTime: 15,
//   });

//   await menuItem.save();
//   console.log("Menu item added:", menuItem);
// };

// // Example usage
// createRestaurant().then((restaurant) => {
//   addMenuItem(restaurant._id);
// });
