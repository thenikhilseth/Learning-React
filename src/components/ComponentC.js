import React from "react";
import { UserConsumer } from "./UserContext";

function ComponentC() {
  return (
    //Utilizing consumer function
    <UserConsumer>
      {(username) => {
        return (
          <div>Component C catch the message coming from App: {username}</div>
        );
      }}
    </UserConsumer>
  );
}

export default ComponentC;
