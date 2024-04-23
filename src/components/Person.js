//JSX component -Person
import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.name} and my id is {person.id}
      </h2>
    </div>
  );
}

export default Person;
