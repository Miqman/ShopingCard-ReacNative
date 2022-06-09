import { FETCH_PRODUCTS } from "../actions/actionType";

const productState = {
  products: [],
};

// console.log(products);
function productReducer(state = productState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}

export default productReducer;
