import React, { useEffect } from "react";
import io from 'socket.io-client';

const Test = () => {
    useEffect(() => {
        const socket = io('http://localhost:8000');
        socket.on('welcome', data => {
            console.log(data);
        });
        return () => socket.disconnect();
    }, []);

    return (
        <div>
            <h1 className="text-9xl">hi</h1>
        </div>
    )
 
}

export default Test;

