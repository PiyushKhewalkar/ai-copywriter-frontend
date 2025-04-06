import React from 'react'

import ProductCard from './ProductCard'

function ProductCardgrid({filteredProducts}) {
  return (
    <div className="m-5">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>Loading</p>
        )}
      </ul>
    </div>
  );
}

export default ProductCardgrid