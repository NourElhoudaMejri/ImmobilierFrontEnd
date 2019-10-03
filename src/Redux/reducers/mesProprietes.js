import * as actions from "../ActionsDef";

let mesProprietesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_MY_ANNONCEMENTS_LIST_SUCCESS:
      return { mesProprietes: action.payload, error: "" };
    case actions.FETCH_MY_ANNONCEMENTS_LIST_FAILURE:
      return { mesProprietes: [], error: action.payload };
    case actions.DELETE_ANNONCEMENT_SUCCESS:
      return {
        ...state,
        mesProprietes: state.mesProprietes.filter(
          el => el._id !== action.payload
        )
      };
    default:
      return state;
  }
};

export default mesProprietesReducer;

const initialState = {
  mesProprietes: [],
  error: "",
  collectionLength: 0
};
