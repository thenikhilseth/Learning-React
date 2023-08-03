import React from "react";

function Greet(props) {
  return (
    <div>
      {" "}
      <h1>
        Hello {props.name}, this is your first {props.framework}App. Welcome to
        frontend. Bdw How was your backend journey ?
      </h1>
      {props.children}
    </div>
  );
}

export default Greet;
