import React, { useState } from 'react'
import Product from '../Product/Product'

const Products = () => {
    const [products, setProducts] = useState([])
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  return (
    <div className='grid grid-cols-2 gap-5 p-2'>
        {
            products.map(product => <Product product={product}></Product>)
        }
    </div>
  )
}

export default Products