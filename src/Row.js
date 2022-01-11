import React, { useState, useEffect } from 'react'
import Product from './Product'

function Row({ title, items }) {
    return (
        <div>
            <h3 className="bordered-header">{title}</h3>
            <div className="card">
                {
                    items.map((item, index) => {
                        return <Product key={index} item={item} />
                    })
                }
            </div>
        </div>
    )
}

export default Row
