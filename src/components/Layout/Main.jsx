import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      {/* <h2>Footer</h2> */}
    </>
  );
};

export default Main;
