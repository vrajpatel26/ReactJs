import { useState } from "react"

export const ShortCircuit = () => {

    const [isLoggedIn , setIsLoggedIn] = useState(true)
    const [user , setUser] = useState("")


    return (
        <section className="container">
            <h1>Welcome to ShortCircuit Evalution !</h1>

           { isLoggedIn && <h3>You are logged in ! </h3>}

           {user ? `Hello , ${user}` : "please log in !"}

            <div className="grid-three-cols">
                <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>Toggle login state</button>
                <button onClick={()=>setUser("Vraj patel")}>Set User</button>
                <button onClick={()=>setUser("")}>clear User</button>
            </div>
        </section>
    )
}