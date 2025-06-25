import { useEffect, useState } from "react"

// export const ReactUseEffect = () => {

//     const [count, setCount] = useState(0)

//     useEffect(() => {
//         console.log("Count value - ", count);

//     }, [count])
//     return (
//         <>
//             <h1>React useeffect Hook</h1>
//             <p>Count:{count}</p>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//         </>
//     )
// }



export const ReactUseEffect = () =>{

    const [date,setDate] = useState(0)

    useEffect(()=>{
        setInterval(() => {
            const updatedDate = new Date();
            setDate(updatedDate.toLocaleTimeString());
        }, 1000);
    },[])

    return(
        <>
        <h1>Date : {date}</h1>
        </>
    )
}
