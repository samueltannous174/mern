import React from "react";
import { useState } from "react";

const TodoForm = (props) => {
    const [name, setName] = useState("")
    const handleInputChange = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        console.log("hi")
        e.preventDefault()
        props.setList(prev => [...prev, name])
        setName("")
    }

    return (
        <div>
            <form className="w-1/4 mx-auto mt-10" >
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                    <input type="text" id="name" name="name"
                           onChange={(e)=> handleInputChange(e)}
                           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                           placeholder="Task Name"/>
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit"
                            onClick={(e)=>handleSubmit(e)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Add
                    </button>
                    <button type="submit"
                            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Delete
                    </button>
                </div>
            </form>

        </div>
    )
}

export default TodoForm