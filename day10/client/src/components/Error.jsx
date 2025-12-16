import { useParams } from "react-router-dom"



const Error = () => {
  const { id } =  useParams();
  console.log(id);
  
    return (
        <div className="text-center mt-10">
            <h1 className="text-4xl font-bold text-red-600">An Error Occurred</h1>
            <p className="mt-4 text-lg">Please try again later.</p>
        </div>
    )
}
export default Error