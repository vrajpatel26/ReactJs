// import { useState } from "react"

// export const State = () => {

//     const [count, setCount] = useState(0)

//     const handleButtonClick = () => {
//         setCount(() => count + 1)
//     }

//     const handleButtonClick1 = () => {
//         if (count >= 0) {
//             setCount(() => count - 1)
//         }

//     }

//     return (
//         <><div>
//             <h1>{count}</h1>
//             <button onClick={handleButtonClick}>Increment</button>
//             <button onClick={handleButtonClick1}>Decrement</button>

//         </div>
//         </>
//     )
// }



//-------------Re-render--------------------
//means if parent component re-render , child component automatically re render. But outside of parent component dont re render.

//Here State is parent component , when i click button , State is re render(change) and also child component re render.


import { useState } from "react"

export const State = () => { //State is the Parent component
    console.log("parent component render");

    

    const [count, setCount] = useState(0)

    const handleButtonClick = () => {
        setCount(() => count + 1)
    }


    return (
        <>
            <div>
                <h1>{count}</h1>
                <button onClick={handleButtonClick}>Increment</button>
            </div>

            {/* it is child component of State */}
            <ChildComponent count = {count} />

        </>
    )
}


const ChildComponent = ({count}) =>{
    console.log("Child component render");
    return(
        <>
        <h2>Child Component - {count}</h2>
        </>
    )
}