// import useApi from "./useApi.jsx";
import {useEffect, useState} from "react";


const List = ()=>{
    const [list,setList] = useState([]);
    const [isSubmitted, setIsSubmited] = useState(false);

    useEffect(() => {
        console.log(isSubmitted)
        if (isSubmitted) {
            fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then(res => {
                    setList(res);
                })
                .catch((error) => {console.error('Error:', error)})
        }

    }, [isSubmitted]);

    console.log(isSubmitted)

    const handleClick = (e)=>{
        e.preventDefault();
        setIsSubmited(true)
    }

    return <div>

        <form>
            <button onClick={(e)=> handleClick(e)}>
                Submit
            </button>
        </form>

       {list.length > 0 && list.map((person, index)=>{
           return (<div key={index}>{person.name}</div>)
       })}


   </div>

}

export default  List;