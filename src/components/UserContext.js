import React from "react";

const UserContext = React.createContext("Default context value");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
