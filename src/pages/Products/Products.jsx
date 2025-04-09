// products page

// heading
// searchbar
// products

import React, { useEffect, useState } from 'react'
import Searchbar from '../../components/common/Searchbar'
import Layout from '../../app/layout'

// components
import ProductCard from '../../components/products/ProductCard'
import Headline from '../../components/common/Headline'

// api

import { getProducts } from '../../lib/api'
import ProductCardgrid from '../../components/products/ProductCardgrid'

function Products() {

    const [allProducts, setAllProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getProducts().then(setAllProducts)
    }, [])

    useEffect(() => {
        const filtered = allProducts.filter((product) => 
            Object.values(product).join(" ").toLowerCase().includes(searchTerm.toLowerCase()) 
        )
        setFilteredProducts(filtered)
        console.log(filteredProducts)
    }, [searchTerm, allProducts])

 


  return (
    <>
    <Layout>
        <Headline heading="Products" formType="product" />
        <Searchbar placeholder="search product" searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProductCardgrid filteredProducts={filteredProducts} />
    </Layout>
    </>
  )
}

export default Products