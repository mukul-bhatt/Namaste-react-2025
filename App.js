import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Mukul bhatt is here with React.createElement"
);

const Title = (
  <div>
    <h1>This is title component 🚀</h1>
  </div>
);

const header = (
  <>
    <h1>This is h3 </h1>
    <h2>This is h2</h2>
    <h3>This is h1</h3>
  </>
);

const HeadingComponent = () => (
  <>
    {header}
    <h1 id="jsxHeading" className="patani">
      This is a jsxHeading
    </h1>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
