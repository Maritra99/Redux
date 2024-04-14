import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCakes } from "../Redux/actionCreators";

function HooksCakeContainer() {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h2>No Of Cakes : {noOfCakes}</h2>
      <button onClick={() => dispatch(buyCakes())}>Buy Cake</button>
    </>
  );
}

export default HooksCakeContainer;
