import React, { useState, useEffect } from "react";
import Product from "./Product";
import { Products } from "../assets/Data/Seed";


function ProductList() {
  const [seed, setSeed] = useState([]);
  useEffect(() => {
    setSeed(Products);
  }, []);

  const sortedProducts = seed.sort((a, b) => b.votes - a.votes )
  
  function increaseVote(productId) {
    const products = sortedProducts
    products.forEach(product => {
      if (productId === product.id) {
        return Object.assign({}, product, {
          votes: product.votes += 1
        })
      } else {
        return product;
      }
    })
    setSeed(products);
  }
  


  const products = seed.map((product) => {
    return (
      <Product
        key={product.id}
        productTitle={product.title}
        productDesc={product.description}
        productImgUrl={product.productImageUrl}
        productOwnerImg={product.submitterAvatarUrl}
        productVotes={product.votes}
        increaseVote={increaseVote}
        productId={product.id}
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
