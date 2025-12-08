import React from 'react'

 const  Colors = (props) => {
    return (
       <div className=" flex  gap-2 p-2 border ">
           {props.colors.map((color) => (
               <div key={color} style={{backgroundColor: color}} className=" flex w-70 h-70  gap-2 p-2 border bg-teal-200">
               </div>
           ))}
       </div>
    )
}
export default Colors