import { createStore, applyMiddleware } from "redux";

import productReducer from "./reducers/rootReducer";
// import logger from "./middlewares/logger";
import thunk from "redux-thunk";

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(productReducer, applyMiddleware(thunk));

export default store;
