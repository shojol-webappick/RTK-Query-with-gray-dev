import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, reset } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  console.log(number);

  return (
    <div className="border-4 border-blue-400 p-10">
        <h1 className="text-center font-bold text-blue-400 text-4xl">Counter Application</h1>
      <br />
      <div className="flex justify-center items-center">
        <input
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Number"
          className="text-xl bg-blue-100 px-2 outline-none border-blue-500 border-2 rounded-l-lg py-[10px] focus:bg-blue-200 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          value={number}
        />
        <button
          onClick={() => {
            dispatch(incrementByValue(parseInt(number)));
            setNumber("");
          }}
          className="text-xl font-bold px-5 py-3 bg-blue-500 text-white rounded-r-lg"
        >
          Add
        </button>
      </div>
      <br />
      <h1 className="text-3xl font-bold text-center">{count}</h1>
      <br />

      <div className="flex justify-center items-center gap-11">
        <button
          className="text-xl font-bold px-5 py-3 bg-blue-500 text-white rounded-lg"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="text-xl font-bold px-5 py-3 bg-blue-500 text-white rounded-lg"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
        <button
          className="text-xl font-bold px-5 py-3 bg-blue-500 text-white rounded-lg"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
