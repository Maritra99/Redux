import React from "react";
import { connect } from "react-redux";
import { buyCakes, buyIceCream } from "../Redux/actionCreators";

function ItemContainer(props) {
  return (
    <>
      <h1>Item - {props.itemState}</h1>
      <button onClick={props.buyItem}>Buy Item</button>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  const item = ownProps.cakes
    ? state.cake.noOfCakes
    : state.iceCream.noOfIceCream;

  return {
    itemState: item,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cakes
    ? () => dispatch(buyCakes())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
