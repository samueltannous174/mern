import React from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const CreateForm = () => {
    const [errors, setErrors] = React.useState([]);
    const navigate = useNavigate();
const handleSubmit = async (data) => {
try {
    await axios.post("http://localhost:3000/create", data);
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
            <Form  buttonText="Add an author"  callBack={handleSubmit}   errors={errors}/>
        </div>

    );
}    
export default CreateForm