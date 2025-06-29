// import { useContext } from "react"
// import { BioContext } from "."

import { useBioContext } from "."



export const Home = ()=>{

    // const{ myName , myAge} = useContext(BioContext)

    //use custom hook 
    const{ myName , myAge} = useBioContext()

    return <h1>Hello Context API(Home) , My name is {myName}, I am {myAge} years old.</h1>
}