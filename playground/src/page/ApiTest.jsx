import axios from "axios";
import React, { useState } from "react";

const ApiTest = () => {
  const [loading, setLoading] = useState(false);
  async function sequentialRequest(num) {
    const arr = [1, 2, "iamdummyData", 4, 5, 6];
    for (let i = 0; i < arr.length; i++) {
      try {
        // (3)
        await getRes(arr[i]);
      } catch (err) {
        // (4)
        console.log(err);
      }
    }
  }

  const COUNT = 5;
  function getRes(num) {
    const baseInstance = axios.create();
    baseInstance.interceptors.response.use(undefined, (error) => {
      const config = error.config;
      config.retryCount = config.retryCount ?? 0;
      console.log("Retry Count: " + config.retryCount);
      const shouldTry = config.retryCount < COUNT;
      console.log(config);
      if (shouldTry) {
        config.retryCount += 1;
        return baseInstance.request(config);
      }
      return Promise.reject(error);
    });
    return new Promise((resolve, reject) => {
      baseInstance
        .get(`https://jsonplaceholder.typicode.com/todos/${num}`) // api주소, body에 보낼 값 위에서 받은 num[i]값
        .then(() => {
          // (1) 정상적인 응답이 왔을때
          resolve("compleate");
        })
        .catch(() => {
          // (2) 정상적인 응답을 받지 못했을때
          reject("network err");
        });
    });
  }

  return (
    <div>
      <button onClick={sequentialRequest}>click</button>
      {/* {loading ? <h1>Loading</h1> : <h1>Good</h1>} */}
    </div>
  );
};

export default ApiTest;
