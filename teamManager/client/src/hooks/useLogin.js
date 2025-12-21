import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const useLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/user/login', {
                email,
                password,
            });
            console.log('Login successful:', response.data);
            login(response.data.user);
            navigate('/game');
            setEmail('');
            setPassword('');
            setErrors({});
        } catch (error) {
            if (error.response?.status === 400) {
                setErrors(error.response.data.errors);
                console.error('Backend validation errors:', error.response.data.errors);
            } else {
                setErrors({ general: 'An unexpected error occurred. Please try again.' });
                console.error('Login error:', error);
            }
        }
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        errors,
        handleSubmit,
    };
};

export default useLogin;
