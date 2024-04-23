import React from "react";

function functionalClick() {
  function clickResponder() {
    console.log("testing functional click responder");
  }

  return (
    <div>
      <button onClick={clickResponder}> Click Functional </button>
    </div>
  );
}

export default functionalClick;
