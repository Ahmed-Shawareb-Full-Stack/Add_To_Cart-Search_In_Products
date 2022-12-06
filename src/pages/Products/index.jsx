//! ─── Imports ─────────────────────────────────────────────────────────────────

import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import ProductsData from "../../Products.json";

//! ─── React Component ─────────────────────────────────────────────────────────

const Products = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    setSearchKey(event.currentTarget.value);
  };

  useEffect(() => {
    const filteredResult = ProductsData.filter((product) =>
      product.title.toLowerCase().includes(searchKey.toLowerCase())
    );
    setSearchResults(filteredResult);
    console.log(searchResults);
  }, [searchKey]);
  return (
    <>
      <div className="container">
        <h1 className="mb-5 text-center">Products</h1>
        <div className="row mb-3">
          <div className="col-4">
            <input
              type="search"
              className="form-control"
              placeholder="Search Products"
              name="search"
              value={searchKey}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row text-start">
          {searchKey === ""
            ? ProductsData.map((product) => (
                <div className="col-4 mb-4" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))
            : searchResults.map((product) => (
                <div className="col-4 mb-4" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Products;
