import React, { useEffect, useState } from "react";

async function apiCall(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  console.log(response);
  return response.json();
}

const ApiTestPage = () => {
  const [arr, setArr] = useState([]);
  const temp = [];
  // async function getApiByFor() {
  //   console.time("For {}");
  //   const todoIdList = [1, 2, 3, 4];
  //   for (const id of todoIdList) {
  //     setInterval(async () => {
  //       const response = await fetch(
  //         `https://jsonplaceholder.typicode.com/todos/${id}`
  //       );
  //       const todo = await response.json();
  //       setArr((prev) => [...prev, todo.title]);
  //     }, [2000]);

  //     // console.log(todo);
  //   }
  //   console.timeEnd("For {}");
  // }
  async function getApiByFor() {
    console.time("For {}");
    const todoIdList = [1, 2, 3, 4];
    for (const id of todoIdList) {
      // setInterval(async () => {
      const todo = await apiCall(id);
      console.log(await todo);
      setArr((prev) => [...prev, todo.title]);
      // }, [2000]);

      // console.log(todo);
    }
    // clearInterval(interval);
    console.timeEnd("For {}");
  }

  async function getApiByForEach() {
    console.time("ForEach {}");
    const todoIdList = [1, 2, 3, 4];
    todoIdList.forEach(async (id) => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const todo = await response.json();
      setArr((prev) => [...prev, todo.title]);
      console.log(todo);
    });

    console.timeEnd("ForEach {}");
  }

  async function getApiByMap() {
    console.time("Map {}");
    const todoIdList = [1, 2, 3, 4];
    const result = await Promise.all(
      todoIdList.map(async (id) => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        const todo = await response.json();
        setArr((prev) => [...prev, todo.title]);
        return todo;
        // console.log(todo);
      })
    );
    console.log(result);
    console.timeEnd("Map {}");
  }

  useEffect(() => {
    // getApiByFor();
    // getApiByMap();
    // getApiByForEach();
  }, []);
  const Clear = () => {
    setArr([]);
  };

  return (
    <div>
      <button onClick={getApiByFor}>Click</button>
      <button onClick={Clear}>Clear</button>
      {arr.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
};

export default ApiTestPage;
