import React, { useState } from "react";
import Page2 from "./Page2";

export const countTest = 1;

const Page1 = ({ count }) => {
  const [temp, setTemp] = useState(countTest);
  return (
    <div style={{ border: "1px solid black", width: "500px", height: "500px" }}>
      {count}
      <Page2 count={count + 1} />
    </div>
  );
};

export default Page1;
