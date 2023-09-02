import React from "react";
import MainScreen from "./components/main-screen/main-screen";
import "./App.scss";
import Brands from "./components/brands/brands";
import Steps from "./components/steps/steps";
import Catalog from "./components/catalog/catalog";
import Way from "./components/way";

const App = () => {
  return (
    <div className="wrapper">
      <Way />
      <MainScreen />
      <Brands />
      <Steps />
      <div className="TEMP"></div>
      <Catalog />
    </div>
  );
};

export default App;
