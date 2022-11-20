import React from "react";
import Page3 from "./Page3";

const Page2 = ({ count }) => {
  return (
    <div style={{ border: "1px solid red", width: "400px", height: "400px" }}>
      {count}
      <Page3 />
    </div>
  );
};

export default Page2;
