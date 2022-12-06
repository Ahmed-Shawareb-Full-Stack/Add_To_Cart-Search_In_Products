import React from "react";

const CardInfo = (props) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <span className=" ">{props.brand}</span>
        </div>
      </div>
      <div className="container">
        <div className="row mb-2">
          <h5 className="card-title col-12">{props.title}</h5>
        </div>
        <div className="row mb-2">
          <span className="col-5 d-inline-block h5">{props.price} EGP</span>
          <span className="col-5 d-inline-block text-center danger rounded bg-danger text-light h5">
            {props.discount} %
          </span>
        </div>
      </div>
    </>
  );
};

export default CardInfo;
