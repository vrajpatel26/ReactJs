import { useReducer } from "react"

export const UseReducerHook = () => {
    //object used for multiple items
    const initialState = {
        count: 0
    }
    const reducer = (state, action) => {


        console.log(action);

        // if (action.type === "INCREMENT") {
        //     return state + 1;
        // }

        // if (action.type === "DECREMENT") {
        //     return state - 1;
        // }

        // if (action.type === "RESET") {
        //     return state = 0;
        // }

        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1 }
            case "DECREMENT":
                return { count: state.count - 1 }

            case "RESET":
                return { count: 0 }

            default:
                return state
        }
    }

    // const [count, dispatch] = useReducer(reducer, 0)
    
    //for multiple items , easily get item from initialState object.
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className=" text-3xl flex h-lvh flex-col items-center justify-center">
            <h1 >{state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </div>
    )
}