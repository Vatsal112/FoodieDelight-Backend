const express = require("express");
const {
  addRestaurantController,
  getRestaurantsController,
  getSingleRestaurantController,
  updateSingleRestaurantController,
  deleteSingleRestaurantController,
  addMenuController,
  getAllMenusController,
  updateSingleMenuController,
  deleteSingleMenuController,
} = require("../controllers/controller");
const router = new express.Router();

router.post("/restaurant", addRestaurantController);
router.get("/restaurants", getRestaurantsController);
router.get("/restaurant/:id", getSingleRestaurantController);
router.put("/restaurant/:id", updateSingleRestaurantController);
router.delete("/restaurant/:id", deleteSingleRestaurantController);

router.post("/menu", addMenuController);
router.get("/menus", getAllMenusController);
router.put("/menu/:id", updateSingleMenuController);
router.delete("/menu/:id", deleteSingleMenuController);

module.exports = router;
