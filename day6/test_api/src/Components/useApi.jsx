import React, {useEffect, useState} from "react";

const useApi=()=>{
    const [list,setList] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then(res => console.log(res))
            .then(res => setList(res.results))
            .catch((error) => {console.error('Error:', error)})

    }, []);
    return list;
}

export default useApi;