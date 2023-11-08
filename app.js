import React from "react";
import ReactDOM from "react-dom/client";

const element = <span>React</span>;
const Title = () => (
  <h1 className="head" tabIndex="5">
    I'm Software Enigneer
  </h1>
);

const data = 1000;
const HeadComponent = () => {
  return (
    <div id="container">
      {Title()}
      <h1 className="heading">I'm Hunaid</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadComponent />);
