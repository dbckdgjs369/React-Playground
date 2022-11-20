import React from "react";

const ProductSearch = (props) => {
  let [name, setName] = React.useState("10");
  let [suggestions, setSuggestions] = React.useState([]);
  React.useEffect(() => {
    if (name !== undefined) {
      props.requestSuggestions(name, setSuggestions);
    }
  }, [name]);

  const onChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <label htmlFor={"search"}>Product name</label>
      <input onChange={onChange} id={"search"} list={"suggestions"}></input>
      <datalist id={"suggestions"}>
        {suggestions.map((suggestion) => (
          <option>{suggestion}</option>
        ))}
      </datalist>
    </div>
  );
};

export default ProductSearch;
