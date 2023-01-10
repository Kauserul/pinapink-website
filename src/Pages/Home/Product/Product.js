import React from 'react'
import { HiStar, IconName } from "react-icons/hi";
import './Product.css'

const Product = ({ product }) => {
  const { img, details, price, ratting, sold, service_charge, old_price, voucher } = product
  console.log(product)
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure style={{ height: 150 }}><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <p className="card-title text-xl p-0 leading-loose product-name"><small>{details}</small></p>
          <div className='flex mb-2 gap-1'>
            <div className='flex justify-content-center items-center'>
              <p className="text-yellow-500"><HiStar></HiStar></p>
              <p>{ratting}</p>
            </div>
            <p>{sold} Sold</p>
          </div>
          <div>
            {
              service_charge ?
                <span className='border px-1 border-green-500'>{service_charge}</span>
                :
                <span></span>
            }
          </div>
          <div>
            {
              voucher ?
                <span className='border px-1 border-blue-500'>{voucher}</span>
                :
                <span></span>
            }
          </div>
          <div className='flex items-center gap-1'>
            <h2 className='text-red-500 font-bold text-2xl'>${price}</h2>
            <span className='text-de mt-1'><del>${old_price}</del></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product