import { combineReducers } from "redux";

import cartReducer from "../reducers/cart.reducer";

const rootReducer = combineReducers({
  cartItems:cartReducer,
});

export default rootReducer;
