import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import api from "../../services/api";
import "./styles.css";

const Main = () => {
    const [products, setProducts] = useState([]);
    const [productsInfo, setProductsInfo] = useState({});
    const [page, setPage] = useState(1)
    
    const loadProducts = async (page = 1) => {
        const { data: {docs, ...productsInfo} } = await api.get(`/products`, { params: { page }});
        setProducts(docs)
        setProductsInfo(productsInfo)
        setPage(page)
    }

    const prevPage = () => {
        if(page === 1) return;
        loadProducts(page - 1) 
    }

    const nextPage = () => {
        if(page === productsInfo.pages) return;
        loadProducts(page + 1)
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <b>{product.title}</b>
                    <p>{product.description}</p>
                    <Link to={`/products/${product._id}`}>Acessar</Link>
                </article>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={prevPage}>Anterior</button>
                <button disabled={page === productsInfo.pages} onClick={nextPage}>Próximo</button>
            </div>
        </div>
    )
}

export default Main
