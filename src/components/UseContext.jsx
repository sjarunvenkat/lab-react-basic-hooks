import React, { useContext } from "react";
import { ToggleTheme } from "../App";
import UseState from "./UseState";

//progression 6
function UseContext() {
  const theme = useContext(ToggleTheme);
  const themeStyle = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div style={themeStyle}>
      <UseState />
    </div>
  );
}

export default UseContext;
