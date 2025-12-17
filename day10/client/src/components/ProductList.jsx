
import { Link } from "react-router-dom"

const ProductList = (props) => {
    

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 ">Product List</h2>
                <ul className="flex flex-col gap-2">
                    {props.array.map((product, index) => (
                        <li key={index} className="bg-white p-4 rounded-md shadow-md">
                            <Link className="text-blue-500 hover:underline" to={`/products/${product._id}`}>
                                {product.title}
                            </Link>
                        </li>
                    ))}
                </ul>
        </div>
    )
}
export default ProductList