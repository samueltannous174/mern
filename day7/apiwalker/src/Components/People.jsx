import {useEffect, useState} from "react";
const People = () => {
    const [people, setPeople] = useState([])
    const [planets, setPlanets] = useState([])
    const [id,setId]=useState(0)
    const [selection,setSelection]= useState("people")
    const[active,setActivate]= useState()

    // const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const peopleRes = await fetch("https://swapi.dev/api/people");
                const peopleData = await peopleRes.json();
                setPeople(peopleData.results);

                const planetRes = await fetch("https://swapi.dev/api/planets");
                const planetData = await planetRes.json();
                setPlanets(planetData.results);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    console.log(active)
    const handleSubmit = (e) => {
        e.preventDefault()
        const array = selection === "people" ? people : planets

        setActivate(array[id])
        }

    return (
        <div className="flex  space-x-10 gap-10 justify-center">
            <select onChange={(e)=>setSelection(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <input type="number" onChange={(e)=>setId(+ e.target.value)}/>

            <button onClick={(e)=> handleSubmit(e)}>Search</button>

            {active && (
                <div>
                    <h1 className="text-2xl text-white font-bold">
                        hello {active.name}
                    </h1>
                    <p>Height: {active.height}</p>
                </div>
            )}

        </div>
    );
};
export default People;