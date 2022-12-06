import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import CardButton from "../../components/CardButton";

const Welcome = () => {
  return (
    <>
      <div
        className="container d-flex flex-column align-items-center justify-content-center m-auto"
        style={{ height: "80vh" }}
      >
        <div className="row ">
          <h1 className="text-center mb-5">Welcome</h1>
        </div>
        <div className="row w-50 ">
          <div className="col-6">
            <Link to={"/products"}>
              <CardButton type="welcome" child="Products" />
            </Link>
          </div>
          <div className="col-6">
            <Link to={"/search"}>
              <CardButton type="welcome" child="Search" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
