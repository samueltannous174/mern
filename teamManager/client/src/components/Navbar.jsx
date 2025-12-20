import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout, user } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="bg-gray-800 text-white p-4 mb-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to={isAuthenticated ? "/game" : "/"} className="text-xl font-bold hover:text-gray-300">
                    Player Manager
                </Link>
                
                <div className="flex items-center gap-4">
                    {isAuthenticated ? (
                        <>
                            <Link to="/all" className="hover:text-blue-300 transition">Manage Players</Link>
                            <Link to="/game" className="hover:text-blue-300 transition">Manage Status</Link>
                            <Link to="/create" className="hover:text-blue-300 transition">Add Player</Link>
                            
                            <div className="flex items-center gap-2 ml-4 border-l pl-4 border-gray-600">
                                {user && <span className="text-sm text-gray-300">Hi, {user.name}</span>}
                                <button 
                                    onClick={handleLogout}
                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
                                >
                                    Logout
                                </button>
                            </div>
                        </>
                    ) : (
                        <div className="flex gap-4">
                            <Link to="/" className="hover:text-blue-300 transition">Login</Link>
                            <Link to="/register" className="hover:text-blue-300 transition">Register</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
