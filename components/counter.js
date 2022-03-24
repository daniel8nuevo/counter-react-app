import React, { useState } from "react";
import "/Design/counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1
        className={
          count > 0 ? "colorGreen" : count < 0 ? "colorRed" : "colorBlack"
        }
      >
        {count}
      </h1>

      <button onClick={() => setCount(count - 1)} className="buttonGroup">
        DECREASE
      </button>
      <button onClick={() => setCount(0)} className="buttonGroup">
        RESET
      </button>
      <button onClick={() => setCount(count + 1)} className="buttonGroup">
        INCREASE
      </button>
    </>
  );
};

export default Counter;
