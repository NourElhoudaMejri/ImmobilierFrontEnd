import axios from "axios";

import * as actions from "./ActionsDef";

export const getAnnouncementsList = queries => async dispatch => {
  let queriesObject = Object.keys(queries);
  let query = "?";
  queriesObject.map(el => {
    if (queries[el] !== "") query += `${el}=${queries[el]}&`;
  });
  query = query.slice(0, query.length);
  try {
    let response = await axios({
      method: "GET",
      url: `/bienImmobiliers/all${query}`
    });
    dispatch({
      type: actions.FETCH_ANNONCEMENT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: actions.FETCH_ANNONCEMENT_FAILURE,
      payload: "Fetching announements list failed, please to terty "
    });
  }
};

export const addAnnoncementAction = newAnnoncement => async dispatch => {
  try {
    let response = await axios({
      method: "POST",
      url: `/bienImmobiliers/add`,
      data: newAnnoncement,
      headers: { Authorization: localStorage.getItem("Authorization") }
    });
    alert("your annoncement was added successfuly");
  } catch (err) {
    alert("Oh Oh, failed to add your new annoncement, please to try again");
  }
};

export const getSelectedAnnoncementAction = id => async dispatch => {
  try {
    let response = await axios({
      method: "GET",
      url: `/bienImmobiliers/selectedAnnonce/${id}`
    });
    dispatch({
      type: actions.FETCH_SELECTED_ANNONCEMENT_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: actions.FETCH_SELECTED_ANNONCEMENT_FAILED,
      payload: "Fetching selected annoncement failed, please to terty "
    });
  }
};
