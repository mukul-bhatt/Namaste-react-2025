import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "Hello world form React! this is me testing my app now the goal is to implement the scripts for runnign our app in package .josn");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)