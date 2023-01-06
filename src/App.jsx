import React from 'react'
import ProductList from './Components/ProductList'

function App() {

  return (
    <div className="container mx-auto my-5 d-flex justify-content-center flex-column">
      <h1 className='text-center'>Popular Products</h1>
      <hr />
      <ProductList />
    </div>
  )
}

export default App
