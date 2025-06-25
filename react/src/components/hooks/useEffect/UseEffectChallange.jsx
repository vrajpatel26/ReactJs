import { useEffect, useState } from "react"

export const UseEffectChallange = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    //for console
    useEffect(() => {
        console.log(name);
    }, [name])

    //for title in chrome
    useEffect(() => {
        document.title = `count:${count}`
    }, [count])


    return (
        <>
            <h1>useEffect Challange</h1>
            <p>
                Count: <span>{count}</span>
            </p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>
                Name: <span>{name}</span>
            </p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        </>
    )
}