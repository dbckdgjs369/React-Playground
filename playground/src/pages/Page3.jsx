import React from "react";
import { useState } from "react";
import { countTest } from "./Page1";
import Page4 from "./Page4";

export let countFromPage3 = 0;

const Page3 = () => {
  const [countFromPage3, setCount] = useState(countTest);

  const click = () => {
    setCount(countFromPage3 + 1);
  };

  return (
    <div style={{ border: "1px solid blue", width: "300px", height: "300px" }}>
      count is {countFromPage3}
      <button onClick={click}>+1</button>
      <Page4 />
    </div>
  );
};

export default Page3;
