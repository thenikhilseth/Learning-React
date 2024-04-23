import React from "react";

function MemoComponent({ name }) {
  console.log("Memo Component Rendering");
  return <div>{name}</div>;
}

export default React.memo(MemoComponent);
