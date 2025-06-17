import { useState } from "react"



export const DerivedState = () => {
    const [Users, setUsers] = useState([
        { name: "Vraj", age: 20 },
        { name: "Manav", age: 22 },
        { name: "Hardik", age: 24 },
        { name: "Kishan", age: 26 },
    ])

    console.log(Users);

    const UserCount = Users.length;
    // console.log(Count);

    const AverageOfAge = Users.reduce((accum, curEle) => accum + curEle.age, 0) / UserCount



    return (
        <>
            <div className="main-container">
                <h1>Users List</h1>
                <ul>
                    {
                        Users.map((curEle, index) => {
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
                <h2>total - {UserCount}</h2>
                <h2>Average Age - {AverageOfAge}</h2>
            </div>
        </>
    )
}



