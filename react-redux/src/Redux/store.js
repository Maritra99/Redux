import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";

const middleWare = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, middleWare);

export default store;
