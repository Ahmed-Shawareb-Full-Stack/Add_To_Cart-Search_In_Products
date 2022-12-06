//! ─── Imports ─────────────────────────────────────────────────────────────────

import React, { useRef } from "react";
import Cart from "../Cart";
import "./styles.scss";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCart, toggleCart } from "../../store";
import { Link, useLocation } from "react-router-dom";
//! ─── React Component ─────────────────────────────────────────────────────────

const NavBar = () => {
  let isOpen = useSelector((state) => state.cart.isOpen);
  const dispatch = useDispatch();
  let [navTab, setNavTap] = useState("Products");
  const location = useLocation();

  return (
    <>
      <div className="container position-relative">
        <div className="row" style={{ height: "5rem" }}>
          {location.pathname === "/search" && (
            <div className=" col-2">
              <Link
                to={"/products"}
                onClick={() => {
                  setNavTap("Products");
                }}
              >
                <div>Products</div>
              </Link>
            </div>
          )}
          {location.pathname === "/products" && (
            <div className=" col-2">
              <Link
                to={"/search"}
                onClick={() => {
                  setNavTap("Search");
                }}
              >
                <div>Search</div>
              </Link>
            </div>
          )}
          <div className="text-center col-9 ">NavBar</div>
          <div className="col-1">
            <ion-icon
              style={{ fontSize: "30px", color: "red" }}
              className="text-primary"
              name="bag-outline"
              onClick={() => dispatch(toggleCart())}
            ></ion-icon>
          </div>
        </div>
        <div
          className={`h-auto position-absolute cart ${
            isOpen ? "d-block" : "d-none"
          }`}
        >
          <Cart />
        </div>
      </div>
    </>
  );
};

export default NavBar;
