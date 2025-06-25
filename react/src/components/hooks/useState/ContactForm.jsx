import { useState } from "react"
import './index.css'

export const ContactForm = () => {

    const [user, setUser] = useState({
        userName: "",
        email: "",
        message: ""
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setUser((prev) => ({ ...prev, [name]: value }));
    }

    const handleFormSubmit = (e) => {
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
                <h1>Contact Page</h1>

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

                    <label htmlFor="password">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        autoComplete="off"
                        value={user.email}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                        type="text"
                        name="message"
                        required
                        autoComplete="off"
                        rows="6"
                        value={user.message}
                        onChange={handleInputChange}
                    />





                    <button type="submit">Contact</button>
                </form>
            </div>
        </div>
    )

}