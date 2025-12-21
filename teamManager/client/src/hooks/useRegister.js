import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/user/create', {
                name,
                email,
                password,
            });
            console.log('Registration successful:', response.data);
            navigate('/game');
            setEmail('');
            setName('');
            setPassword('');
        } catch (error) {
            if (error.response?.status === 400) {
                setErrors(error.response.data.errors);
                console.error('Backend validation errors:', error.response.data.errors);
            }
        }
    };

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        errors,
        handleSubmit,
    };
};

export default useRegister;
