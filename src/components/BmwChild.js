import React from "react";

export default function BmwChild(props) {
  return (
    <div>
      <button onClick={() => props.carCategoryHandler("BMW")}>
        {" "}
        Check the category of the car{" "}
      </button>
    </div>
  );
}
