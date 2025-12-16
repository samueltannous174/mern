
import React, {  useState, useEffect} from 'react'
import ProductsForm from './ProductsForm.jsx'
import ProductList from './ProductList.jsx'
const Products = () => {
    const [array, setArray] = useState([])

        useEffect(() => {
            const fetchProducts = async () => {
                const response = await fetch("http://localhost:3000/");
                const data = await response.json();
                setArray(data);
            }
            fetchProducts();
        }, [])
        
    return (
        <div className="p-4 w-[50%] mx-auto">
            <ProductsForm setArray={setArray} />
            <ProductList array={array} />
        </div>

    )
}

export default Products