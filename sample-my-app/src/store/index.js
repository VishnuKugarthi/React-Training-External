import { createStore, combineReducers } from "redux";
import bugsReducer from "../reducer/bugsReducer";
import productsReducer from "../reducer/productsReducer";

// const store = createStore(bugsReducer);
// const store = createStore(productsReducer);

const mainReducer = combineReducers({
  bugState: bugsReducer,
  productState: productsReducer,
});

const store = createStore(mainReducer);

export default store;
