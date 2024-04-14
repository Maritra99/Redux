import {
  FETCHING_USER,
  USER_FETCH_FAILURE,
  USER_FETCH_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  users: [],
  errorMessage: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_USER:
      return {
        ...state,
        loading: true,
      };
    case USER_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        errorMessage: "",
      };
    case USER_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
