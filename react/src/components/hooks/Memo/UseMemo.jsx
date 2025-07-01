import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
    const sum = () => {
        console.log("Calculating sum...");
        let i = 0;
        for (i = 0; i <= 100000000; i++) {
            i = i + 1;
        }
        return i;
    }

    const total = useMemo(() => sum(), [])

    return <p>sum : {total}</p>
}


export const MemoParentComponent = () => {

    const [count, setCount] = useState(0)

    return (
        <div className="p-4 font-display flex flex-col justify-center items-center">
            <ExpensiveComponent />
            <button
                onClick={() => setCount(count + 1)}
                className="py-3 px-6 bg-blue-500 rounded-sm"
            >
                Re-render Parent
            </button>
            <p>Parent re-renders:{count}</p>

        </div>
    )
}