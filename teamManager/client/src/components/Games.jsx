import React, { useState, useEffect } from 'react';
import { dummyGames } from '../games';

const Games = () => {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentGame, setCurrentGame] = useState(null)

    const getButtonClass = (playerStatus, buttonStatus) => {
        if (playerStatus !== buttonStatus) {
            return "bg-gray-400 hover:bg-gray-500 text-white";
        }

        switch (buttonStatus) {
            case "playing":
                return "bg-green-600 text-white";
            case "undecided":
                return "bg-yellow-500 text-white";
            case "not_playing":
                return "bg-red-600 text-white";
            default:
                return "bg-gray-400 text-white";
        }
    };

    const updatePlayerStatus = (playerId, status) => {
        const updatedPlayers = currentGame.players.map((player) =>
            player._id === playerId ? { ...player, status: status } : player
        );
        const updatedGame = { ...currentGame, players: updatedPlayers };
        setCurrentGame(updatedGame);
    }

    

    
useEffect(() => {
  setGames(dummyGames)
  setCurrentGame(dummyGames[0])
  setLoading(false)
}, [])

    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>
    console.log(currentGame)
    return (
        <div className="flex flex-col w-3/4 mt-50 mx-auto gap-4">
            <h1 className="text-2xl font-bold">Game Players</h1>

            <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg border border-gray-200">
                {games.map((game) => (
                    <button
                        key={game.id || game._id}
                        onClick={() => setCurrentGame(game)}
                        className={`px-3 py-1 rounded-full text-sm shadow-sm border transition-colors ${
                            currentGame?._id === (game.id || game._id)
                                ? 'bg-blue-500 text-white border-blue-600'
                                : 'bg-black border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        {game.title}
                    </button>
                ))}
            </div>


            
            <table className="border-collapse w-3/4 mx-auto">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200 text-center">Name</th>
                        <th className="px-6 py-3 border-b border-gray-200 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentGame?.players.map((player) => (
                        <tr key={player.id || player._id} className="hover:bg-gray-100">
                            <td className="px-6 py-4 border-b border-gray-200 text-center">{player.name}</td>
                            <td className="px-6 py-4 border-b text-center space-x-2">
                                <button
                                    className={`px-4 py-2 rounded ${getButtonClass(player.status, "playing")}`}
                                    onClick={()=> updatePlayerStatus(player._id, "playing")}
                                >
                                    Playing
                                </button>

                                <button
                                    className={`px-4 py-2 rounded ${getButtonClass(player.status, "undecided")}`}
                                    onClick={()=> updatePlayerStatus(player._id, "undecided")}
                                >
                                    Undecided
                                </button>

                                <button
                                    onClick={()=> updatePlayerStatus(player._id, "not_playing")}
                                    className={`px-4 py-2 rounded ${getButtonClass(player.status, "not_playing")}`}
                                >
                                    Not Playing
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Games