import { combineReducers } from "redux";

import cartReducer from "../reducers/cart.reducer";

const rootReducer = combineReducers({
  cartReducer,
});

export default rootReducer;
