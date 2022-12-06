//! ─── Imports ─────────────────────────────────────────────────────────────────

import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../components/NavBar";

//! ─── React Component ─────────────────────────────────────────────────────────

const Navigation = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <NavBar />
        </div>
        <div className="row">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Navigation;
