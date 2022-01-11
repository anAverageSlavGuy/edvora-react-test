import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Row from './Row';
import Sidebar from './Sidebar';

function Products() {
    const [items, setItems] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = () => {
        (async () => {
            //https://assessment-edvora.herokuapp.com/
            let items = await Axios.get("https://assessment-edvora.herokuapp.com");
            console.log();
            setItems(items.data);
            setFilter(groupBy(items.data, 'brand_name'));
            console.log(groupBy(items.data, 'brand_name'));
        })();
    }

    const filterItemsByProduct = (value) => {
        if(value != 'default'){
            let f = items.filter(filter => filter.brand_name === value);
            setFilter(groupBy(f, 'brand_name'));
        } else {
            setFilter(groupBy(items, 'brand_name'));
        }
    }

    const filterItemsByState = (value) => {
        if(value != 'default'){
            let f = items.filter(filter => filter.address.state === value);
            setFilter(groupBy(f, 'brand_name'));
        } else {
            setFilter(groupBy(items, 'brand_name'));
        }
    }

    const filterItemsByCity = (value) => {
        if(value != 'default'){
            let f = items.filter(filter => filter.address.city === value);
            setFilter(groupBy(f, 'brand_name'));
        } else {
            setFilter(groupBy(items, 'brand_name'));
        }
    }

    const groupBy = (xs, key) => {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }

    return (
        <>
            <Sidebar 
            filters={items} 
            onProductChange={filterItemsByProduct} 
            onStateChange={filterItemsByState} 
            onCityChange={filterItemsByCity} />
            
            <div className="container">
                <h1>Edvora</h1>
                <h2>Products</h2>
                {
                    Object.keys(filter).map((item, index) => {
                        return (
                            <Row key={index} title={item} items={filter[item]} />
                        )
                    })

                }
            </div >
        </>
    )
}



export default Products;
