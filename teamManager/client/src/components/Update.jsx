
import React, { useEffect } from 'react';
import axios from 'axios';
import Form from './Form.jsx';
import { useParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';


const Update = () => {
    const [backendErrors, setBackendErrors] = React.useState([]);
    const [currentPlayer, setCurrentPlayer] = React.useState({ name: '', position: '' });
    const { id } = useParams();
    const { user } = useAuth();

    useEffect(() => {
        const fetchData = async () => {
            try {   
                const player = await axios.get(`http://localhost:8000/players/${id}`);
                console.log('Player data:', player.data);
                setCurrentPlayer(player.data);
            }
            catch (error) {
                console.error('There was an error fetching the player data!', error);   
            }
        };
        fetchData();
    }, []);



    const handleSubmit = async (data) => {
        try {   
            setBackendErrors({});
            const response = await axios.put(`http://localhost:8000/players/${id}`, { ...data, loggedId: user._id });
            console.log('Player updated:', response.data);
        }
        catch (error) {
            if (error.response?.status === 400) {
                
                setBackendErrors(error.response.data.errors);
                console.error('Backend validation errors:', error.response.data.errors);
            }
            console.error('There was an error updating the player!', error);
        }
    };

     return <div className='flex flex-col w-3/4  mt-50 mx-auto gap-4'>
        <h1 className='text-2xl font-bold'>Update Player</h1>
        <Form currentPlayer={currentPlayer} btnText="Update Player" onSubmit={handleSubmit} backendErrors={backendErrors} />
    </div>;

}
export default Update;