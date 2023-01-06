import React from 'react'

function Product({productDesc, productImgUrl, productTitle, productOwnerImg}) {
  return (
    <div>
      <div className="border border-light rounded p-4">
        <img src={productImgUrl} alt="product" className="img-fluid thumbnail"/>
      </div>
      <div className='product-info-container'>
        <div class="middle-aligned-content">
            <h2 className=''>{ productTitle }</h2>
            <p className=''>{ productDesc }</p>
        </div>
        <div className='lower-aligned-content'>
            <span className=''>Submitted by: </span>
            <img src={productOwnerImg} alt="product-owner" className='img-fluid rounded-circle' />
        </div>
      </div>
    </div>
  )
}

export default Product
