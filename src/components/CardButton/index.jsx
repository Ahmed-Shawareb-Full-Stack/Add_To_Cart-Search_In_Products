//! ─── Imports ─────────────────────────────────────────────────────────────────

import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store";

//! ─── React Component ─────────────────────────────────────────────────────────

const CardButton = (props) => {
  const product = props.product;
  const dispatch = useDispatch();
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <button
            className={`btn btn-info col-6`}
            onClick={() => {
              dispatch(addItemToCart(product));
            }}
          >
            {props.child}
          </button>
        </div>
      </div>
    </>
  );
};

export default CardButton;
