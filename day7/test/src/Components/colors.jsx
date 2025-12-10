import { useParams } from "react-router-dom";

const Colors = () => {
    const { color, word } = useParams();

    return (
        <div>
            <h1 style={{ color: color || "white" }}>
                {word}
            </h1>
        </div>
    );
};

export default Colors;
