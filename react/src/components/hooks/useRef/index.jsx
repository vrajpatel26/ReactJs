import { use, useRef } from "react"

export const UseRefs = () => {

    // const username = document.getElementById("username")
    // const password = document.getElementById("password")

    const username = useRef(null)
    const password = useRef(null)

    // console.log(username);
    

    const handleFormSubmit = (e) => {
        e.preventDefault()

        console.log(username.current.value);
        console.log(password.current.value);

    }
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <input type="text" id="username" ref={username} />
                <br />
                <input type="text" id="password" ref={password} />
                <br />
                <button>Submit</button>
            </form>
        </>
    )
}