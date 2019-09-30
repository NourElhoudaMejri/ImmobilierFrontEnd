import * as actions from "../ActionsDef";

let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { ...state, user: action.payload, error: "" };
    case actions.LOGIN_FAILURE:
      return { ...state, user: {}, error: action.payload };
    case actions.GET_PROFILE_SUCCESS:
      return { ...state, user: action.payload, error: "" };
    case actions.GET_PROFILE_FAILURE:
      return { ...state, user: {}, error: action.payload };
    case actions.EDIT_PROFILE_SUCCESS:
      return { ...state, user: action.payload, error: "" };
    case actions.EDIT_PROFILE_FAILURE:
      return { ...state, user: {}, error: action.payload };
    default:
      return state;
  }
};

let initialState = {
  user: {
    nom: ""
  },
  error: ""
};

export default userReducer;
