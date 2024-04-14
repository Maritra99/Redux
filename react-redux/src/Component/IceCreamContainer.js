import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../Redux/actionCreators";

function IceCreamContainer(props) {
  return (
    <>
      <h2>No Of Ice Cream : {props.noOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy Cake</button>
    </>
  );
}

const mapStateToprops = (state) => {
  return {
    noOfIceCream: state.iceCream.noOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(IceCreamContainer);
