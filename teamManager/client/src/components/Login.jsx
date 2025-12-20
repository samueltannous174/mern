import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../context/AuthContext";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const {login} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/user/login', {
                email,
                password
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

    return (
        <div className="container mx-auto p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
                {errors.general && (
                    <div className="mb-4 text-red-500 text-sm">
                        {errors.general}
                    </div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inline-full-name">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="inline-password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="******************"
                    />
                    {errors.password && <p className="text-red-500 text-xs italic">{errors.password.message}</p>}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                    </div>
                    <p className="text-center text-gray-500 text-xs">
                        Don't have an account? <Link to={'/register'} className="text-blue-500 hover:underline">Register</Link>
                    </p>
            </form>
        </div>
    );
};
export default Login;