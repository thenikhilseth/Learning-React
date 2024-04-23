// eslint-disable-next-line
import React, { Component } from "react";
// eslint-disable-next-line
import logo from "./logo.svg";
import "./App.css";
// eslint-disable-next-line
import Greet from "./components/Greet";
// eslint-disable-next-line
import Welcome from "./components/Welcome";
//eslint-disable-next-line
import Old from "./components/Old";
//eslint-disable-next-line
import Subscribe from "./components/Subscribe";
// eslint-disable-next-line
import Counter from "./components/Counter";
import FunctionalClick from "./components/functionalClick";
import ClassClick from "./components/classClick";
import CarParent from "./components/CarParent";
import UserLogin from "./components/UserLogin";
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import InlineStyling from "./components/InlineStyling";
import styles from "./appStyles.module.css";
import Form from "./components/form";
import LifecycleA from "./components/lifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import ParentComponent from "./components/ParentComponent";
import RefsDemo from "./components/RefsDemo";
import FRefParentInput from "./components/FRefParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import CounterRenderProps from "./components/CounterRenderProps";
import ClickCounterRenderProps from "./components/ClickCounterRenderProps";
import HoverCounterRenderProps from "./components/HoverCounterRenderProps";
import ComponentA from "./components/ComponentA";
import { UserProvider } from "./components/UserContext";
import ComponentC from "./components/ComponentC";
import ComponentB from "./components/ComponentB";
import PostList from "./components/HTTP/PostList";
import PostForm from "./components/HTTP/PostForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name="Nikhil" framework="React 16">
          {" "}
          <button> Action </button>{" "}
        </Greet>
        <Greet name="John" framework="React 18">
          {" "}
          This is Children Props, just example{" "}
        </Greet>
        <Welcome name="Nikhil" />
        <Subscribe />
        <Counter />
        <FunctionalClick />
        <ClassClick />
        <CarParent />
        <UserLogin />
        <NameList />
        <Stylesheet primary={true} />
        <InlineStyling />
        <Form />
        <LifecycleA /> */}
        {/* <FragmentDemo /> */}
        {/* <ParentComponent /> */}
        {/* <Old /> */}
        {/* <h1 className={styles.success}> Success with CSS Modules</h1>
        <h1 className={styles.error}> Error with CSS Modules</h1>
        <RefsDemo />
        <FRefParentInput />
        <PortalDemo />
        <ErrorBoundary>
          <Hero heroName={"Batman"} />
        </ErrorBoundary> */}
        {/* <ErrorBoundary>
          <Hero heroName={"Joker"} />
        </ErrorBoundary> */}
        {/* <ErrorBoundary>
          <Hero heroName={"Spiderman"} />
        </ErrorBoundary>
        <ClickCounter name={"Nikhil"} />
        <HoverCounter /> */}
        {/* <CounterRenderProps
          render={(count, incrementHandler) => (
            <ClickCounterRenderProps
              count={count}
              incrementHandler={incrementHandler}
            ></ClickCounterRenderProps>
          )}
        /> */}
        {/* <CounterRenderProps
          render={(count, incrementHandler) => (
            <HoverCounterRenderProps
              incrementHandler={incrementHandler}
              count={count}
            ></HoverCounterRenderProps>
          )}
        /> */}
        {/* <UserProvider value="This value is only for component C and not for Component A and B">
          <ComponentA />
        </UserProvider> */}
        {/* <PostList /> */}
        <PostForm />
      </div>
    );
  }
}

export default App;
