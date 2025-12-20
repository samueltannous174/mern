import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
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
                password
            });
            console.log('Registration successful:', response.data);
            navigate('/game');
            setEmail('');
            setName('');
            setPassword('')
        } catch (error) {
            if (error.response?.status === 400) {
                setErrors(error.response.data.errors);
                console.error('Backend validation errors:', error.response.data.errors);
            }

        }
    };


    return (
        <div className="flex flex-col items-center justify-center w-3/4 mt-50 mx-auto gap-4">
            <h1 className="text-2xl font-bold">Register</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {errors.general && (
                    <div className="mb-4 text-red-500 text-sm">
                        {errors.general}
                    </div>
                )}
                {errors.name && (
                    <div className="mb-4 text-red-500 text-sm">
                        {errors.name.message}
                    </div>
                )}
                {errors.email && (
                    <div className="mb-4 text-red-500 text-sm">
                        {errors.email.message}
                    </div>
                )}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                </div>
                {errors.password && (
                    <div className="mb-4 text-red-500 text-sm">
                        {errors.password.message}
                    </div>
                )}
                
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
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
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;