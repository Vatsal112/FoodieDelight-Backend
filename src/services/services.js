const Restaurant = require("../models/restaurantModel");
const MenuItem = require("../models/menuItemModel");

const addRestaurantService = async (params) => {
  try {
    const isExist = await Restaurant.findOne({ name: params.name });
    if (isExist) {
      return {
        status: 400,
        message: "Restaurant with the same name already exist already exists",
      };
    }
    const data = new Restaurant(params);
    const res = await data.save();
    return {
      status: 200,
      data: res,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const getRestaurantsService = async () => {
  try {
    const data = await Restaurant.find({ isActive: true });
    if (!data) {
      return {
        status: 400,
        message: "No data found",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const getSingleRestaurantService = async (id) => {
  try {
    const data = await Restaurant.findById({ _id: id });
    if (!data) {
      return {
        status: 404,
        message: "Restaurant not found",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const updateSingleRestaurantService = async (id, params) => {
  try {
    const isExist = await Restaurant.findOne({ name: params.name });
    if (isExist) {
      return {
        status: 400,
        message: "Restaurant with the same name already exist already exists",
      };
    }
    const data = await Restaurant.findOneAndUpdate({ _id: id }, params, {
      new: true,
    });
    if (!data) {
      return {
        status: 400,
        message:
          "Restaurant not found or something went wrong while updating the Restaurant",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const deleteSingleRestaurantService = async (id) => {
  try {
    const param = { _id: id.trim() };
    const isExist = await Restaurant.findById(param._id);
    if (!isExist) {
      return {
        status: 404,
        message: "Restaurant not found",
      };
    }
    const data = await Restaurant.deleteOne(param);
    if (data.deletedCount === 1) {
      return {
        status: 200,
        message: "Restaurant deleted successfully",
      };
    } else {
      return {
        status: 400,
        message: "No document found",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

//Menu

const addMenuService = async (params) => {
  try {
    const data = new MenuItem(params);
    const res = await data.save();
    return {
      status: 200,
      data: res,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const getAllMenusService = async (restaurantId) => {
  try {
    if ([null, undefined, ""].includes(restaurantId)) {
      return {
        status: 400,
        message: "Please provide a restaurant id",
      };
    }
    const data = await MenuItem.find({ restaurantId: restaurantId });
    if (data.length === 0) {
      return {
        status: 400,
        message: "No data found",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const updateSingleMenuService = async (id, params) => {
  try {
    const isExist = await MenuItem.findOne({ name: params.name });
    if (isExist) {
      return {
        status: 400,
        message: "MenuItem with the same name already exist",
      };
    }
    const data = await MenuItem.findOneAndUpdate({ _id: id }, params, {
      new: true,
    });
    if (!data) {
      return {
        status: 400,
        message:
          "MenuItem not found or something went wrong while updating the MenuItem",
      };
    }
    return {
      status: 200,
      data: data,
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

const deleteSingleMenuService = async (id) => {
  try {
    const param = { _id: id.trim() };
    const isExist = await MenuItem.findById(param._id);
    if (!isExist) {
      return {
        status: 404,
        message: "MenuItem not found",
      };
    }
    const data = await MenuItem.deleteOne(param);
    if (data.deletedCount === 1) {
      return {
        status: 200,
        message: "MenuItem deleted successfully",
      };
    } else {
      return {
        status: 400,
        message: "No document found",
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};

module.exports = {
  deleteSingleMenuService,
  updateSingleMenuService,
  getAllMenusService,
  addMenuService,
  deleteSingleRestaurantService,
  updateSingleRestaurantService,
  getSingleRestaurantService,
  getRestaurantsService,
  addRestaurantService,
};
