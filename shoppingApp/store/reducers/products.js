import PRODUCTS from "../../data/dummy-data";
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/products";
import Product from "../../models/product";

const intialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((prod) => prod.ownerId === "u1"),
};

export default (state = intialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        "ui",
        action.productData.title,
        action.productData.imageUrl,
        action.productData.description,
        action.productData.price
      );
      return {
        ...state,
        //   concat makes a new array with new object
        availableProducts: state.availableProducts.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };

    case UPDATE_PRODUCT:
        const productIndex = state.userProducts.findIndex(
            prod => prod.id === action.pid
        )
        const updatedProduct = new Product (
            action.pid,
            state.userProducts[productIndex].ownerId,
            action.productData.title,
            action.productData.imageUrl,
            action.productData.description,
            state.userProducts[productIndex].price
        )
        const updatedUserProducts = [...state.userProducts]
        // replacing the user product at an index with the updated product in a copy. not the original
        updatedUserProducts[productIndex] = updatedProduct

        // below updates the available products when on the productOverviewScreen
        const availableProductIndex = state.availableProducts.findIndex(prod => prod.id === action.pid)

        const updateAvailableProducts = [...state.availableProducts]

        updateAvailableProducts[availableProductIndex] = updatedProduct 

        return {
            ...state,
            availableProducts: updateAvailableProducts,
            userProducts: updatedUserProducts
        }


    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.pid
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.pid
        ),
      };
  }
  return state;
};
