import React from "react";

import Header from "../UI/Header";
import Menu from "../Menu";
import AppRouter from "./../AppRouter/AppRouter";
import classes from "./App.module.scss";

const App: React.FC = () => {

  return (
    <div className={classes.component}>
      <Header />
      <main>
        <Menu />
        <AppRouter />
      </main>
    </div>
  )
};

export default App;
