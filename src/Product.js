import React from 'react'

function Product({ item }) {
    return (
        <div className="product">
            <div className="product-cell">
                <img src={item.image} />
            </div>
            <div className="product-cell">
                <span className="product-title">{item.brand_name}</span>
                <span className="product-brand">{item.product_name}</span>
                <span className="product-price">$ {item.price}</span>
            </div>
            <div className="product-cell">
                <span className="product-location">{item.address.city}</span>
            </div>
            <div className="product-cell">
                <span className="product-date">{item.date.slice(0,10)}</span>
            </div>
            <div className="product-cell" style={{"grid-column": "1/3"}}>
                <span className="product-description">{item.discription}</span>
            </div>
        </div>
    )
}

export default Product
