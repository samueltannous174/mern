import Sub from "./Sub.jsx";
import Adv from "./Adv.jsx";

const Main = ({className, children}) => {
    return (
        <div className={className}>
            <div className="flex gap-8">
                <Sub className="w-[30%]  bg-amber-200 h-100"/>
                <Sub className="w-[30%] bg-amber-200 h-100"/>
                <Sub className="w-[30%] bg-amber-200 h-100"/>
            </div>
            <div>
                <Adv className="bg-blue-300 h-20 w-[96%]"/>
            </div>
        </div>
    )
}
export default Main
