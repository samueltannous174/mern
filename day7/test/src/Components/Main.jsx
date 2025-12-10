import {useParams} from "react-router-dom";

const Main = () => {
    const {id} =  useParams();

    if (isNaN(+ id)) {
        console.log("This is a word:", id);
    } else {
        console.log("This is a number:", +id);
    }

    return (
        <div>
            <h1>{id}</h1>
            <h1>Main222222222222</h1>
        </div>
    )
}
export default Main