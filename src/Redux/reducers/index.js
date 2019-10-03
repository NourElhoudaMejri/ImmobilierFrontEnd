import { combineReducers, createStore } from "redux";

import filtersReducer from "./filters";
import announcementsReducer from "./annonces";
import userReducer from "./user";
import singleAnnouncementReducer from "./singleAnnonce";
import mesProprietesReducer from "./mesProprietes";

let reducers = combineReducers({
  filtersReducer,
  announcementsReducer,
  userReducer,
  singleAnnouncementReducer,
  mesProprietesReducer
});

export default reducers;
