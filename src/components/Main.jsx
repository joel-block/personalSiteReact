import React from "react";
import { Route, Routes } from "react-router-dom";
import { NavBar, Home, Projects, About } from "./index";

const Main = () => {
  return (
    <div className="main-container">
      <header>
        <NavBar />
        <h1 className="main-title">Hello Main</h1>
      </header>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Main;
