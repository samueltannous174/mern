import {useState} from "react";

const AddColor = (props) => {
    const [color, setColor] = useState("red")
    const addColor = ()=>{
        props.setArray(prev=> [...prev, color ])
    }
    return (
        <div>
            <input type="text" placeholder="Enter Color" className="border border-black p-2" onChange={(e)=>setColor(e.target.value)} />
            <button className="border border-black p-2" onClick={addColor}>Add Color</button>
        </div>
    )
}

export default AddColor