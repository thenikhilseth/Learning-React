//Explained about list rendering and making JSX as a seperate component

import React from "react";
import Person from "./Person";

export default function NameList() {
  const persons = [
    {
      id: 1,
      name: "Nikhil",
    },
    {
      id: 2,
      name: "Palak",
    },
  ];
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <div>{personList}</div>;
}
