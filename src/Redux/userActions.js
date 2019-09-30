import axios from "axios";

import * as actions from "./ActionsDef";

export const loginAction = user => async dispatch => {
  try {
    let response = await axios({
      method: "POST",
      url: "/clients/login",
      data: user
    });

    localStorage.setItem("Authorization", response.data.token);

    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: response.data.user
    });
  } catch (err) {
    dispatch({
      type: actions.LOG_IN_FAILURE,
      payload: "Log In failed, please to try again"
    });
  }
};

export const logoutAction = () => async dispatch => {
  try {
  } catch (err) {}
};

export const getProfileAction = () => async dispatch => {
  try {
    let response = await axios({
      method: "GET",
      url: "/clients/profile",
      headers: { Authorization: localStorage.getItem("Authorization") }
    });
    dispatch({
      type: actions.GET_PROFILE_SUCCESS,
      payload: response.data
    });
  } catch (err) {
    dispatch({
      type: actions.GET_PROFILE_FAILURE,
      payload: "fetching user profile failed"
    });
  }
};

export const editProfileAction = updatedUser => async dispatch => {
  try {
    let response = await axios({
      method: "POST",
      url: "/clients/update-profile",
      headers: { Authorization: localStorage.getItem("Authorization") },
      data: updatedUser
    });

    dispatch({
      type: actions.EDIT_PROFILE_SUCCESS,
      payload: response.data
    });

    alert("Profile has been updated");
  } catch (err) {
    dispatch({
      type: actions.EDIT_PROFILE_FAILURE,
      payload: "updating user profile failed"
    });
  }
};
