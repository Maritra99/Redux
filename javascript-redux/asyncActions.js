const redux = require("redux");
const thunkMiddleWare = require("redux-thunk").thunk;
const axios = require("axios");

const createStore = redux.createStore;
const applyMiddleWare = redux.applyMiddleware;

const initialState = {
  loading: false,
  users: [],
  errorMessage: "",
};

const FETCHING_USER = "FETCHING_USER";
const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS";
const USER_FETCH_FAILURE = "USER_FETCH_FAILURE";

const fetchingUser = () => {
  return {
    type: FETCHING_USER,
  };
};
const fetchUserSuccess = (users) => {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
};
const fetchUserFailure = (msg) => {
  return {
    type: USER_FETCH_FAILURE,
    payload: msg,
  };
};

const fetchUser = () => {
  return function (dispatch) {
    dispatch(fetchingUser());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((respose) => {
        const users = respose.data.map((user) => user.id);
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare));
console.log("Initial State : ", store.getState());

store.subscribe(() => {
  console.log("Updated State : ", store.getState());
});

store.dispatch(fetchUser());
