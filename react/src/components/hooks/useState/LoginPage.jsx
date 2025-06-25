import { useState } from 'react'
import './index.css'


export const LoginPage = () => {

    const [user, setUser] = useState({
        userName: "",
        password: ""
    })

    const handleInputChange = (e) =>{
        const {name , value} = e.target;

        setUser((prev)=>({...prev, [name]:value}));

    }

    const handleFormSubmit = (e) =>{
        e.preventDefault()

        console.log(user);


        setUser({
            userName: "",
            email: "",
            message: ""
        });
    }
    return (
        <div className="container">
            <div className="card">
                <h1>Login Page</h1>

                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="userName">UserName</label>
                    <input
                        type="text"
                        name="userName"
                        required
                        autoComplete="off"
                        value={user.userName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        autoComplete="off"
                        value={user.password}
                        onChange={handleInputChange}
                    />

                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    )
}