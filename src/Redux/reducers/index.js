import { combineReducers, createStore } from "redux";

import filtersReducer from "./filters";
import announcementsReducer from "./annonces";
import userReducer from "./user";

let reducers = combineReducers({
  filtersReducer,
  announcementsReducer,
  userReducer
});

export default reducers;
