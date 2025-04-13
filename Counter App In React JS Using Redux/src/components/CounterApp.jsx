import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AnotherCounterApp from "./AnotherCounterApp";
import Test from "./Test";

const CounterApp = () => {
  // Now here we have to dispatch the values of redux

  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(data.value);

  return (
    <>
      {/* <div> */}
        {/* <button onClick={() => dispatch({ type: "inc" })}>+</button>

        <h2>{data.value}</h2>

        <button onClick={() => dispatch({ type: "dec" })}>-</button>
      </div>
      <AnotherCounterApp /> */}
      <Test/>
    </>
  );
};

export default CounterApp;
