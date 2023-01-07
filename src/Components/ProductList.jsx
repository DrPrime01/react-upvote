import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Products } from "../assets/Data/Seed";


function ProductList() {
  const [seed, setSeed] = useState([]);
  useEffect(() => {
    setSeed(Products);
  }, []);
  
  function voteProduct(productId) {
    const products = seed;
    const newProducts = products.map(product => {
      if (productId === product.id) {
        return Object.assign({}, product, {
          votes: product.votes + 1,
        })
      } else {
        return product;
      }
    })
    setSeed(newProducts);
  }

  const sortedProducts = seed.sort((a, b) => b.votes - a.votes )

  const products = sortedProducts.map((product) => {
    return (
      <Product
        key={product.id}
        productTitle={product.title}
        productDesc={product.description}
        productImgUrl={product.productImageUrl}
        productOwnerImg={product.submitterAvatarUrl}
        productVotes={product.votes}
        id={product.id}
        voteProduct={voteProduct}
      />
    );
  });
  return (
    <div className="container d-flex flex-column">
      { products }
    </div>
  );
}

export default ProductList;
