import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <h2>Header</h2>
      <Outlet></Outlet>
      <h2>Footer</h2>
    </>
  );
};

export default Main;
