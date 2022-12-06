import React from "react";

const CardImg = (props) => {
  return (
    <>
      <div
        style={{ height: "18rem" }}
        className="text-align-center d-flex justify-content-center"
      >
        <img src={props.imgUrl} className="img-fluid rounded d-block " />
      </div>
    </>
  );
};

export default CardImg;
