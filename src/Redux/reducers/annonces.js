import * as actions from "../ActionsDef";

let announcementsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ANNONCEMENT_SUCCESS:
      return { ...state, announcements: action.payload, error: "" };
    case actions.FETCH_ANNONCEMENT_FAILURE:
      return { announcements: [], error: action.payload };
    default:
      return state;
  }
};

export default announcementsReducer;

const initialState = {
  announcements: [],
  error: "",
  collectionLength: 0
};
