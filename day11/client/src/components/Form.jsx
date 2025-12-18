import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Form = (props)=>{
    const [name, setName] = useState("");
    const [frontErrors, setFrontErrors] = useState({});

    useEffect(() => {
    if (props.current?.name) {
    setName(props.current.name);
    }
}, [props.current]);

    

    console.log("Current prop:", props.current);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFrontErrors({});
        props.callBack({ name });
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 3) {
            setFrontErrors({ name: "Name must be at least 3 characters long." });
        }else{
            setFrontErrors({});
        }
    }

    return (
        <div>
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col p-4 w-[30%] mx-auto gap-10">
            <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
            </label>
            <input onChange={(e)=> handleNameChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter name" 
            value={name}
            />
            {frontErrors?.name && ( 
                <p className="text-red-500 text-sm">
                    {frontErrors.name}
                </p>
            )}

            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                {props.buttonText}
            </button>
            {props.errors?.name && (
        <p className="text-red-500 text-sm">
        {props.errors.name.message}
        </p>
    )}
        </form>
        </div>
    );
}
export default Form;