import { BUY_ICECREAM } from "./IceCreamTypes";

const initialState = {
  noOfIceCream: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
