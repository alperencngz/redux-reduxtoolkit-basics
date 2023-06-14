import { useSelector, useDispatch } from "react-redux";

import classes from './Counter.module.css';
import { useRef } from "react";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const increaseRef = useRef(0);

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increaseHandler = (event) => {
    dispatch({ type: "increase", amount: Number(increaseRef.current.value) });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };


  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase Value</button>
        <label> Increase Value </label>
        <input type="text" ref={increaseRef}></input>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
