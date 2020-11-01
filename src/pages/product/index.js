import React, { useEffect, useState } from 'react'
import api from '../../services/api';
import "./styles.css";

const Product = ({match: {params}}) => {
    const [product, setProduct] = useState({});
    
    const getProduct = async () => {
        const {data} = await api.get(`/products/${params.id}`)
        setProduct(data);
    }
    
    useEffect(() => {
        getProduct();
    }, [])
    return (
        <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>
                URL: <a href={product.url}>{product.url}</a>
            </p>
        </div>
    )

}


export default Product
