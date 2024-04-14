import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCakes } from "../Redux/actionCreators";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  return (
    <>
      <h2>No Of New Cakes : {props.noOfCakes}</h2>
      <input value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={() => props.buyCakes(number)}>Buy {number} Cake</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.cake.noOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: (number) => dispatch(buyCakes(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
