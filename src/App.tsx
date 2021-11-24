import React, { FC } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App: FC = () => {
  return (
    <>
      <Header data-testid={"app-header"} />
      <Home />
    </>
  );
};

export default App;
