
import { useState } from "react"
import { useNavigate } from "react-router-dom"



const ProductsForm = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")


    const handleNameChange = (e) => {
        setTitle(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }
    // const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const productData = {
            title,
            price,
            description
        }
        props.setArray( prevArray => [...prevArray, productData] )
        
        fetch("http://localhost:3000/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        }).then( res => res.json() )
        .then( data => console.log(data) )
    
    }
    return (
        <form  className="flex flex-col w-full gap-4">
            <label className="block">
                <span className="block text-gray-700 text-sm font-bold mb-2">
                    Title
                </span>
                <input type="text" onChange={(e)=> handleNameChange(e) } className="block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500" />
            </label>
            <label className="block">
                <span className="block text-gray-700 text-sm font-bold mb-2">
                    Price
                </span>
                <input type="number" onChange={(e)=> handlePriceChange(e) } className="block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500" />
            </label>
            <label className="block">
                <span className="block text-gray-700 text-sm font-bold mb-2">
                    Description
                </span>
                <input type="text" onChange={(e)=> handleDescriptionChange(e) } className="block w-full px-3 py-2 text-gray-700 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-500" />
            </label>
            <button type="submit" onClick={(e)=> handleSubmit(e)} className="px-4 py-2 font-bold text-white bg-blue-500 rounded">Add Product</button>
        </form>
    )
}
export default ProductsForm