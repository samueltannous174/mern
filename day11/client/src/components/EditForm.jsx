
import React, { useState } from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const EditForm = () => {
    const [errors, setErrors] = useState([]);
    const [current, setCurrent] = useState({});
    const navigate = useNavigate(); 
    const { id } = useParams();

    useEffect(() => {
        const fetchAuthor = async () => {
        try {
            const res = await axios.get(`http://localhost:3000/authors/${id}`);
            setCurrent(res.data);
        } catch (error) {
            console.error("Error fetching author:", error);
        }
        };
    
        fetchAuthor();
    }, [id]);

const handleSubmit = async (data) => {
try {
    await axios.put(`http://localhost:3000/authors/${id}`, data);
    setErrors({});
    navigate("/authors");
} catch (err) {
    if (err.response?.status === 400) {
    setErrors(err.response.data.errors);
    }
}
};  
    return (
        <div className="p-4 w-full mx-auto flex flex-col  ">
        <h1 className="text-3xl font-bold underline">
            Favorite Authors 
        </h1>   
        <Link to={"/authors"}>Home</Link>
            <Form  current={current} buttonText="Update an author"  callBack={handleSubmit}   errors={errors}/>
        </div>
    );
}
export default EditForm