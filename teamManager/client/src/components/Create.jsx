import React, { useState } from 'react';
import Form from './Form.jsx';
import axios from 'axios';


const Create = () => {

    const [backendErrors, setBackendErrors] = React.useState([]);

    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    
    const handleSubmit = async (data) => {
        try {   
            const response = await axios.post('http://localhost:8000/create', data);
            console.log('Player created:', response.data);
        }
        catch (error) {
            if (error.response?.status === 400) {
                setBackendErrors(error.response.data.errors);
                console.error('Backend validation errors:', error.response.data.errors);
            }
            console.error('There was an error creating the player!', error);
        }
    }
    
    return <div className='flex flex-col w-3/4  mt-50 mx-auto gap-4'>
        <h1 className='text-2xl font-bold'>Create Player</h1>
        <Form currentPlayer={{ name: '', position: '' }} btnText="Create Player" onSubmit={handleSubmit} backendErrors={backendErrors} />
    </div>;
}
export default Create;