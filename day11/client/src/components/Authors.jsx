import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const   Authors = () => {
    const [authors, setAuthors] = useState([]);

useEffect(()=>{
    const fetchAuthors = async ()=>   {
        try {
      const res = await axios.get("http://localhost:3000/authors");
      setAuthors(res.data);
        } catch (error) {
        console.error("Error fetching authors:", error);
        }
    }
    fetchAuthors();
},[])

const handleDelete = async (id) => {
    try {
        await axios.delete(`http://localhost:3000/authors/${id}`);
        setAuthors(authors.filter(author => author._id !== id));
    } catch (error) {
        console.error("Error deleting author:", error);
    }
};

    return (
        <div className="p-4 w-full mx-auto">
            <h2 className="text-3xl font-bold underline">Favorites Authors</h2>
            <Link to="/authors/new" className="block mt-4 text-blue-500 hover:text-blue-700">
                Add an author
            </Link>
            <table className="table-auto w-full text-left bg-white border-collapse">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b border-gray-200 text-gray-600 tracking-wider">Name</th>
                        <th className="px-6 py-3 border-b border-gray-200 text-gray-600 tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {authors.map(author => (
                    <tr key={author._id}>
                        <td className="px-6 py-4 border-b border-gray-200">{author.name}</td>
                        <td className="px-6 py-4 border-b border-gray-200">
                            <div className="flex gap-2">
                                <Link to={`/authors/edit/${author._id}`} className="text-blue-500 hover:text-blue-700">
                                    Edit
                                </Link>
                                <button onClick={() => handleDelete(author._id)} className="text-red-500 hover:text-red-700">
                                    Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>  
            </table>
        </div>
        
    );
}

export default Authors;  

