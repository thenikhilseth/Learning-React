import React from "react";

const Hello = () => {
  // return(
  //   <div className="testClass">
  //     <h1>Looking at the difference between the code with and without JSX syntax</h1>
  //   </div>
  // )

  return React.createElement(
    "div",
    { className: "testClass" },
    React.createElement(
      "h1",
      null,
      "Looking at the difference between the code with and without JSX syntax"
    )
  );
};

export default Hello;
