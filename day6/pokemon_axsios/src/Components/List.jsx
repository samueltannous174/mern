import {useEffect, useState} from "react";
import axios from "axios";


const List = ()=>{
    const [list,setList] = useState([]);
    const [isSubmitted, setIsSubmited] = useState(false);
    console.log(list)
    useEffect(() => {
        console.log(isSubmitted)
        if (isSubmitted) {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
                .then(response => {
                    setList(response.data.results);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });

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
            return (<div className="text-white" key={index}>{person.name}</div>)
        })}

    </div>

}

export default  List;