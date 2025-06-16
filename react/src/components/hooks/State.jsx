import { useState } from "react"

export const State = () => {

    const [count, setCount] = useState(0)

    const handleButtonClick = () => {
        setCount(() => count + 1)
    }

    const handleButtonClick1 = () => {
        if (count >= 0) {
            setCount(() => count - 1)
        }

    }

    return (
        <><div>
            <h1>{count}</h1>
            <button onClick={handleButtonClick}>Increment</button>
            <button onClick={handleButtonClick1}>Decrement</button>

        </div>
        </>
    )
}