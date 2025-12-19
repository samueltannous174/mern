const List = (props) => {
    return (
        <div className="w-1/4 mx-auto mt-10">
            {props.list.map((item, index) => (
                <div key={index} className="flex justify-between">
                    <p>{item}</p>
                    <button onClick={() => props.setList(props.list.filter((_, i) => i !== index))}>Delete</button>
                </div>
            ))}

        </div>
    )
}

export default List