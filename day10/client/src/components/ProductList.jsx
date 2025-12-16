

const ProductList = (props) => {
    


    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Product List</h2>
                {props.array.map((product, index) => (
                    <li key={index}>{product.title}</li>
                ))}
                
        </div>
    )
}
export default ProductList