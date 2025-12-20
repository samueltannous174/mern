
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AllPlayers = () => {
    const [allPlayers, setAllPlayers] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        const fetchPlayers = async () => {
            try {
                const response = await fetch('http://localhost:8000/players');
                const data = await response.json();
                setAllPlayers(data);
            } catch (error) {
                console.error('Error fetching players:', error);
            }
        };
        fetchPlayers();
    }, []);

    return (
        <div className="flex flex-col w-3/4 mt-50 mx-auto gap-4">
            <h1 className="text-2xl font-bold mb-4">All Players</h1>
            <ul>
                <table className="border-collapse w-3/4 mx-auto">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b border-gray-200 text-center">Name</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-center">Position</th>
                            <th className="px-6 py-3 border-b border-gray-200 text-center">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allPlayers.map((player) => (
                            <tr key={player._id} className="hover:bg-gray-100">
                                <td className="px-6 py-4 border-b border-gray-200 text-center">
                                    {user && user._id === player.loggedId ? (
                                        <Link to={`/update/${player._id}`}>
                                            {player.name}
                                        </Link>
                                    ) : (
                                        <span>
                                            {player.name}
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 border-b border-gray-200 text-center">{player.position}</td>
                                <td className="px-6 py-4 border-b border-gray-200 text-center">
                                    <button
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </ul>
        </div>
    );
}
export default AllPlayers;