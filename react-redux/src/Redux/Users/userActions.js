import axios from "axios";
import {
  FETCHING_USER,
  USER_FETCH_FAILURE,
  USER_FETCH_SUCCESS,
} from "./userTypes";

export const fetchingUser = () => {
  return {
    type: FETCHING_USER,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
};

export const fetchUserFailure = (msg) => {
  return {
    type: USER_FETCH_FAILURE,
    payload: msg,
  };
};

export const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchingUser());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const userData = response.data;
        dispatch(fetchUserSuccess(userData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
