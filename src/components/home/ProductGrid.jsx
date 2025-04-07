import React from 'react'
import ProductCard from './ProductCard'

function ProductGrid({filteredProducts}) {
  return (

    <div className="mx-5 overflow-x-scroll">
      <ul className="flex w-[50vw] whitespace-nowrap space-x-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <li key={product._id} className="">
                <ProductCard product={product} />
            </li>
          ))
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </div>

   
  )
}

export default ProductGrid