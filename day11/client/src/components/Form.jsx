import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Form = (props)=>{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [frontErrors, setFrontErrors] = useState({});

    useEffect(() => {
    if (props.current?.name) {
    setName(props.current.name);
    }
    if (props.current?.age) {
    setAge(props.current.age);
    }
}, [props.current]);

    

    console.log("Current prop:", props.current);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFrontErrors({});
        props.callBack({ name, age });
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 3) {
            setFrontErrors({ name: "Name must be at least 3 characters long." });
        }else{
            setFrontErrors({});
        }
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
        if (e.target.value < 0) {
            setFrontErrors({ age: "Age cannot be negative." });
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
                    <div className="mt-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                Age
            </label>
            <input value={age} onChange={(e)=> handleAgeChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" type="number" placeholder="Enter age" />
            {frontErrors?.age && (
                <p className="text-red-500 text-sm">
                    {frontErrors.age}
                </p>
            )}
            
            </div>

            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                {props.buttonText}
            </button>
            {props.errors && Object.keys(props.errors).length > 0 && (
                <div className="mt-4">
                    {Object.keys(props.errors).map((key) => (
                        <p key={key} className="text-red-500 text-sm">
                            {props.errors[key].message}
                        </p>
                    ))}
                </div>
            )}
     
        </form>
        </div>
    );
}
export default Form;