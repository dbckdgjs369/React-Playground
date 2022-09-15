import React, { useEffect, useState } from "react";

const ApiTestPage = () => {
  const [arr, setArr] = useState([]);
  const temp = [];
  async function getApiByFor() {
    console.time("For {}");
    const todoIdList = [1, 2, 3, 4];
    for (const id of todoIdList) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const todo = await response.json();
      setArr((prev) => [...prev, todo.title]);
      console.log(todo);
    }
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
    await Promise.all(
      todoIdList.map(async (id) => {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        const todo = await response.json();
        setArr((prev) => [...prev, todo.title]);
        console.log(todo);
      })
    );
    console.timeEnd("Map {}");
  }

  useEffect(() => {
    // getApiByFor();
    getApiByMap();
    // getApiByForEach();
  }, []);

  return (
    <div>
      {arr.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  );
};

export default ApiTestPage;
