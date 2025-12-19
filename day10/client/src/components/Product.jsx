
import React, {  useEffect, useState} from 'react'
import { useParams } from "react-router-dom"

const Product = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams(); 
useEffectt(() => {
            const fetchProducts = async () => {
                const response = await fetch("http://localhost:3000/find/" + id);
                const data = await response.json();
                setProduct(data);
            }
            fetchProducts();
        }, [])        
        console.log(id);
        
    return (
        <div>
            <h2>Product Detail Page</h2>
        {product && (
            <div>
                <p>Product Title: {product.title}</p>
                <p>Product Price: {product.price}</p>
                <p>Product Description: {product.description}</p>
            </div>
        )}

        </div>
    )
}
export default Product