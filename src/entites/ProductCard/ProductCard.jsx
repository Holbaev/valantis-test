import React, { useEffect } from 'react'
import './ProductCard.scss'
import box from '../../shared/assets/img/box (1).png'
import { getProduct } from '../../shared/service/ProductService'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../../shared/store/reducers/ProductSlice'

const ProductCard = ({product}) => {
  
  return (
    <div className="product">
        <img src={box} alt="" className="product_img" />
        <p className="product_brand">{product.brand ? product.brand : "Brand"}</p>
        <p className="product_price">{product.price ? product.price : "Brand"}$</p>
        <h3 className="product_title">{product.product ? product.product : "Product title"}</h3>
        <p className="product_brand">Id - {product.id ? product.id : "Brand"}</p>
    </div>
  )
}

export default ProductCard