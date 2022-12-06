//!─── Imports ─────────────────────────────────────────────────────────────────

import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, removeItemFromCart } from "../../store";

//! ─── React Component ─────────────────────────────────────────────────────────

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container cart-container">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              className="row p-3 align-items-center  justify-content-center"
              key={item.id}
            >
              <div className="col-4 align-items-center justify-content-center">
                <img
                  src={item.thumbnail}
                  className="img-fluid"
                  style={{ width: "100px", height: "100px" }}
                />
              </div>
              <div className="col-6 container">
                <div className="row">
                  <div className="col-12">{item.title}</div>
                </div>
                <div className="row justify-content-start">
                  <div className="col-12">
                    {` price ${item.price} X count ${item.quantity}  total ${
                      item.price * item.quantity
                    }`}
                  </div>
                </div>
              </div>
              <div className="col-2 container-fluid text-center h-auto">
                <div className="row justify-content-evenly ">
                  <div className="col-5  text-center justify-content-center align-items-center d-flex flex-column w-100">
                    <button
                      className="d-block btn btn-primary"
                      onClick={() => {
                        dispatch(removeItemFromCart(item));
                      }}
                    >
                      <ion-icon
                        name="chevron-down-outline"
                        style={{ fontSize: "25px" }}
                      ></ion-icon>
                    </button>
                  </div>
                  <div className="col-5 text-center justify-content-center  align-items-center d-flex flex-column w-100">
                    <button
                      className="d-block btn btn-danger "
                      onClick={() => {
                        dispatch(deleteItemFromCart(item));
                      }}
                    >
                      <ion-icon
                        name="close-outline"
                        style={{ fontSize: "25px" }}
                      ></ion-icon>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Items In Your Cart</div>
        )}
      </div>
    </>
  );
};

export default Cart;
