import React, { FC } from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <div>
      <Header data-testid={"app-header"} />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
