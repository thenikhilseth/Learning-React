import React from "react";

function FragmentDemo() {
  const items = ["1", "2"];
  return (
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={items.indexOf(item)}>
          <h1>{item}</h1>
        </React.Fragment>
      ))}
      <h3>Fragment Demo</h3>
      <p> Fragments are used to avoid the need of enclosing div tag</p>
    </React.Fragment>
  );
}

export default FragmentDemo;
