import React, {  useState, useEffect} from 'react';

const Form = (props) => {
    const [name, setName] = useState(props.currentPlayer.name);
    const [position, setPosition] = useState(props.currentPlayer.position);
    const [frontendErrors, setFrontendErrors] = useState({});
    useEffect(() => {
        setName(props.currentPlayer.name || '');
        setPosition(props.currentPlayer.position || '');
    }, [props.currentPlayer]);

    const handleNameChange = (e) => {
    const value = e.target.value;

        setName(value);
        setFrontendErrors((prev) => {
        if (value.length < 2) {
            return {
            ...prev,
            name: "Name must be at least 2 characters long.",
            };
        } else {
            const { name, ...rest } = prev;
            return rest;
        }
        });
    };

        
    const handlePositionChange = (e) => {
        const value = e.target.value;

        setPosition(value);

        setFrontendErrors((prev) => {
            if (value.length < 2) {
                
            return {
                ...prev,
                position: "Position must be at least 2 characters long.",
                };

            } else {
                const { position, ...rest } = prev;
            return rest;
            }
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({ name, position });
        setName('');
        setPosition('');
        setFrontendErrors({});
    }




    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/4">
            <label className="flex flex-col">
                Player Name:
            </label>
                <input type="text" value={name} onChange={(e)=>handleNameChange(e)} name="name" className="border-2 p-2" />
                {frontendErrors.name && <p className="text-red-500">{frontendErrors.name}</p>}
            <label className="flex flex-col">
                Position:
            </label>
            <input type="text" value={position} onChange={(e) => handlePositionChange(e)} name="position" className="border-2 p-2" />
            {frontendErrors.position && <p className="text-red-500">{frontendErrors.position}</p>}
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">{props.btnText}</button>
                            {props.backendErrors && Object.keys(props.backendErrors).length > 0 && (
                <div className="mt-4">
                    {Object.keys(props.backendErrors).map((key) => (
                        <p key={key} className="text-red-500 text-sm">
                            {props.backendErrors[key].message}
                        </p>
                    ))}
                </div>
            )}            
        </form>
    );
}
export default Form;