
//Help of memo , we can wrap the component that we do not want to  rerender unless  their props change.
//Here count's props is not change, so count component didnot rerender.



import { useState } from "react"
import { Counts } from "./MemoCount"

export const ReactMemo = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <div className="p-4 font-display flex flex-col justify-center items-center ">
                <h1 className="text-2xl">{count}</h1>
                <button
                    className="bg-blue-500 py-1 px-3 h-10"
                    onClick={() => setCount((prev) => prev + 1)}
                >Increment</button>
            </div>
            <Counts />
        </>
    )
}