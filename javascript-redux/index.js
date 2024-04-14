const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
  noOfCakes: 10,
};

const BUY_CAKE = "BUY_CAKE";

const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State : ", store.getState());
const unSubscribe = store.subscribe(() => {
  console.log("Updated State : ", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyCake());

unSubscribe();
