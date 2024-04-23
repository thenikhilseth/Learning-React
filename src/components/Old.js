import React from "react";

const Hello = () => {
  //with using JSX
  // return(
  //   <div className="testClass">
  //     <h1>Looking at the difference between the code with and without JSX syntax</h1>
  //   </div>
  // )

  //without JSX, we need to use React.createElement
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
