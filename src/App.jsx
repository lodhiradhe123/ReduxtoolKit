import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "./store/reducers/counterSlice";

function App() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => {
    console.log(state);
    return state.counter;
  });
  return (
    <>
      <div style={{marginLeft:"30px",  fontSize:"60px"}}>{value}</div>
      <button onClick={()=>(dispatch(increment(1)))}>increment</button>
      <button onClick={()=>(dispatch(decrement(1)))}>decrement</button>
      <button onClick={()=>(dispatch(incrementByAmount(5)))}>incrementBy-5</button>
    </>
  );
}

export default App;
