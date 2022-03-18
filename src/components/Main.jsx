import React from "react";
import { Switch, Route } from "react-router-dom";
import { NavBar, Home, Projects, About } from "./index";

const Main = () => {
  return (
    <div className="main-container">
      <header>
        <NavBar />
        <h1 className="main-title">Hello Main</h1>
      </header>
      <div className="switch-container">
        <Switch>
          <Route exact path={"/"}>
            <Home />
          </Route>
          <Route path={"/about"}>
            <About />
          </Route>
          <Route path={"/projects"}>
            <Projects />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Main;
