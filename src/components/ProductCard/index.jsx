import React from "react";
import CardButton from "../CardButton";
import CardImg from "../CardImg";
import CardInfo from "../CardInfo";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="card">
        <div>
          <CardImg imgUrl={product.thumbnail} />
        </div>
        <div className="card-body">
          <div>
            <CardInfo
              title={product.title}
              category={product.category}
              brand={product.brand}
              price={product.price}
              discount={product.discountPercentage}
            />
          </div>
          <div>
            <CardButton type="card" child="Add to cart" product={product} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
