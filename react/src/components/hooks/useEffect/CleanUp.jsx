import { useEffect, useState } from "react"

export const CleanUp = () => {

    const [count, setCount] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)

        return () => clearInterval(timer)


    }, [])

    return (
        <>
            <h1>My Followers in Instagram</h1>
            <h1>{count}</h1>
            <h1>Followers : {count}</h1>
            <p>RealTime Counter </p>
        </>
    )
}