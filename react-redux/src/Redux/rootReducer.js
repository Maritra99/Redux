import { combineReducers } from "redux";
import cakeReducer from "./Cakes/CakeReducer";
import iceCreamReducer from "./IceCreams/IceCreamReducer";
import userReducer from "./Users/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: userReducer,
});

export default rootReducer;
