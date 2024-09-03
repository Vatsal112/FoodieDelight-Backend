const {
  addRestaurantService,
  getRestaurantsService,
  getSingleRestaurantService,
  updateSingleRestaurantService,
  deleteSingleRestaurantService,
  addMenuService,
  getAllMenusService,
  updateSingleMenuService,
  deleteSingleMenuService,
} = require("../services/services");

const addRestaurantController = async (req, res, next) => {
  const response = await addRestaurantService(req.body);
  return res.status(response?.status).send(response);
};

const getRestaurantsController = async (req, res, next) => {
  const response = await getRestaurantsService();
  return res.status(response?.status).send(response);
};

const getSingleRestaurantController = async (req, res, next) => {
  const response = await getSingleRestaurantService(req.params.id);
  return res.status(response?.status).send(response);
};

const updateSingleRestaurantController = async (req, res, next) => {
  const response = await updateSingleRestaurantService(req.params.id, req.body);
  return res.status(response?.status).send(response);
};

const deleteSingleRestaurantController = async (req, res, next) => {
  const response = await deleteSingleRestaurantService(req.params.id);
  return res.status(response?.status).send(response);
};

const addMenuController = async (req, res, next) => {
  const response = await addMenuService(req.body);
  return res.status(response?.status).send(response);
};

const getAllMenusController = async (req, res, next) => {
  const response = await getAllMenusService(req.body);
  return res.status(response?.status).send(response);
};

const updateSingleMenuController = async (req, res, next) => {
  const response = await updateSingleMenuService(req.params.id, req.body);
  return res.status(response?.status).send(response);
};

const deleteSingleMenuController = async (req, res, next) => {
  const response = await deleteSingleMenuService(req.params.id);
  return res.status(response?.status).send(response);
};

module.exports = {
  deleteSingleMenuController,
  updateSingleMenuController,
  getAllMenusController,
  addMenuController,
  deleteSingleRestaurantController,
  updateSingleRestaurantController,
  getSingleRestaurantController,
  getRestaurantsController,
  addRestaurantController,
};
