import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Cards = ({ amount }) => {
  const [arr, setArr] = React.useState(new Array(amount).fill(false));
  const cardClick = (index) => {
    const arrTemp = new Array(amount).fill(false);
    console.log(index);
    arrTemp[index] = true;
    console.log();
    setArr(arrTemp);
  };
  useEffect(() => {
    console.log(arr);
  }, [arr]);
  return (
    <table>
      <tbody>
        <tr>
          {arr.map((e, index) => (
            <td key={index} onClick={() => cardClick(index)}>
              {e === false ? "down" : "up"}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
const click = () => {
  console.log("ckickl");
};

root.render(
  // <React.StrictMode>
  <Cards amount={4} />
  // </React.StrictMode>
);

let row = document.getElementById("root").getElementsByTagName("tr")[0];
if (row) {
  let cell = row.getElementsByTagName("td")[1];
  if (cell) {
    cell.click();
  }
}
setTimeout(() => console.log(document.getElementById("root").innerHTML));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
