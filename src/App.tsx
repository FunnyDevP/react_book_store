import React, { FC } from "react";
import Header from "./components/Header/Header";

const App: FC = () => {
  return (
    <>
      <Header data-testid={"app-header"} />
    </>
  );
};

export default App;
