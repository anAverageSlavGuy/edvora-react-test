import React, { useState, useEffect } from 'react';

function Sidebar({ filters, onProductChange, onStateChange, onCityChange }) {
    const [products, setProduct] = useState([]);
    const [states, setState] = useState([]);
    const [cities, setCity] = useState([]);

    useEffect(() => {
        let products = [...new Set(filters.map(item => item.brand_name))];
        setProduct(products);
        let states = [...new Set(filters.map(item => item.address.state))];
        setState(states);
        let cities = [...new Set(filters.map(item => item.address.city))];
        setCity(cities);
    }, [filters])

    return (
        <div className="sidebar">
            <div className="card filters">
                <div className="bordered-header">Filters</div>
                <div>
                    <select className="filter-select" defaultValue="default" onChange={(e) => onProductChange(e.target.value)}>
                        <option value="default">Products</option>
                        {
                            products.map((item) => <option value={item}>{item}</option>)
                        }
                    </select>
                </div>
                <div>
                    <select className="filter-select" defaultValue="default" onChange={(e) => onStateChange(e.target.value)}>
                        <option value="default">State</option>
                        {
                            states.map((item) => <option value={item}>{item}</option>)
                        }
                    </select>
                </div>
                <div>
                    <select className="filter-select" defaultValue="default" onChange={(e) => onCityChange(e.target.value)}>
                        <option value="default">City</option>
                        {
                            cities.map((item) => <option value={item}>{item}</option>)
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
