// const Users = [
//     { name: "Vraj", age: 21 },
//     { name: "Manav", age: 22 },
//     { name: "Hardik", age: 23 },
//     { name: "Kishan", age: 24 },


// ];


import { useState } from "react"


export const Challange = () => {

    const [User, setUser] = useState([
        { name: "Vraj", age: 21 },
        { name: "Manav", age: 22 },
        { name: "Hardik", age: 23 },
        { name: "Kishan", age: 24 },
    ])


    return (
        <>
            <div className="main-container">
                <h1>Users List</h1>
                <ul>
                    {
                        User.map((curEle, index) => {
                            return (
                                <>
                                    <li key={index}>

                                        {curEle.name} - {curEle.age} years old

                                    </li>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}