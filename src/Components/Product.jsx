import React from "react";
import { AiFillCaretUp } from "react-icons/ai";

function Product({
  productDesc,
  productImgUrl,
  productTitle,
  productOwnerImg,
  productVotes,
  increaseVote,
  productId,
}) {
  function increaseVoteHandler() {
    increaseVote(productId);
  }

  return (
    <div className="d-flex p-4 mb-3 border border-light rounded">
      <div className="me-5">
        <img
          src={productImgUrl}
          alt="product"
          className="img-fluid"
          height={150}
          width={150}
        />
      </div>
      <div className="product-info-container">
        <div className="vote-link">
          <a className="me-2" role="button" onClick={increaseVoteHandler}>
            <AiFillCaretUp />
          </a>
          {productVotes}
        </div>
        <div className="middle-aligned-content">
          <h3 className="">{productTitle}</h3>
          <p className="">{productDesc}</p>
        </div>
        <div className="lower-aligned-content">
          <span className="">Submitted by: </span>
          <img
            src={productOwnerImg}
            alt="product-owner"
            className="img-fluid rounded-circle"
            height={30}
            width={30}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
