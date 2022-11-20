// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import ReactDOM from "react-dom/client";

const Cards = (props) => {
  return null;
};

document.body.innerHTML = "<div id='root'> </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<Cards amount={4} />, rootElement);

let row = document.getElementById("root").getElementsByTagName("tr")[0];
if (row) {
  let cell = row.getElementsByTagName("td")[1];
  if (cell) {
    cell.click();
  }
}
setTimeout(() => console.log(document.getElementById("root").innerHTML));
