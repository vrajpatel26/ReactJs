import { use, useState } from "react"
import "./index.css"

export const RegistrationForm = () => {

    const [user,setUser] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        phoneNumber:"",
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
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>sign up</h1>
                    <p>please fill in the form to create an account</p>

                    <label htmlFor="firstName">
                        <b>First Name</b>
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter FirstName"
                        required
                        value={user.firstName}
                        onChange={handleInputChange}
                    />


                    <label htmlFor="lastName">
                        <b>Last Name</b>
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter lastName"
                        required
                        value={user.lastName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="firstName">
                        <b>Email</b>
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        required
                        value={user.email}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="password">
                        <b>Password</b>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required
                        value={user.password}
                        onChange={handleInputChange}
                    />

                    <label htmlFor="phoneNumber">
                        <b>Phone Number</b>
                    </label>
                    <input
                        type="phone"
                        name="phoneNumber"
                        placeholder="Enter Phone Number"
                        required
                        value={user.phoneNumber}
                        onChange={handleInputChange}
                    />

                    <p>
                        By creating an account you agree to our
                        <a href="#" style={{ color: "dodgerblue" }}>
                            term & condition
                        </a>
                    </p>


                    <div className="clearfix">
                        <button type="submit" className="btn">Sign up</button>
                    </div>
                </div>

            </form>
        </>
    )
}