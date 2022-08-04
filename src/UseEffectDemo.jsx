import React, { useState, useEffect } from "react";

const UseEffectDemo = () => {
  const [count, setCount] = useState(0);
  useEffect(() => console.log("clicked!"), [count]);

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

export default UseEffectDemo;
