import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Products } from "../assets/Data/Seed";

function ProductList() {
  const [seed, setSeed] = useState([]);
  useEffect(() => {
    setSeed(Products);
    console.log(seed);
  }, []);

  const products = seed.map((product) => {
    return (
      <Product
        key={product.id}
        productTitle={product.title}
        productDesc={product.description}
        productImgUrl={product.productImageUrl}
        productOwnerImg={product.submitterAvatarUrl}
      />
    );
  });
  return (
    <div className="container">
      { products }
    </div>
  );
}

export default ProductList;
