import { useEffect, useState } from "react"

export const Test = () =>{

    const [count , setCount] = useState(0)
    
    useEffect(()=>{
        setInterval(()=>{
            setCount((prev)=> prev + 1 )
        },1000)
    },[setCount])


    const hanndleButtonClick=()=>{
        setCount(count+1)
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={hanndleButtonClick}>CLick</button>
        </>
    )
}