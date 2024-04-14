import React from "react";
import { connect } from "react-redux";
import { buyCakes } from "../Redux/actionCreators";

function CakeContainer(props) {
  return (
    <>
      <h2>No Of Cakes : {props.noOfCakes}</h2>
      <button onClick={props.buyCakes}>Buy Cake</button>
    </>
  );
}

const mapStateToprops = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: () => dispatch(buyCakes()),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(CakeContainer);
