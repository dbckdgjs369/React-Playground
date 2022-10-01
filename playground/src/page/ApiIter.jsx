import React from "react";
import axios from "axios";

export default function ApiIter() {
  function timeRequest() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    arr.forEach((titem, index) => {
      setTimeout(function () {
        getRes(titem);
      }, 1000 * (index + 1));
    });
  }

  async function getRes(id) {
    // api 호출 함수
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    console.log(await res);
  }
  return (
    <div>
      <button onClick={timeRequest}>click</button>
    </div>
  );
}
