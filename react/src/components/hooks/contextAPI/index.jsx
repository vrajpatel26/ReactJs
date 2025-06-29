import { createContext, useContext } from "react";


export const BioContext = createContext()

export const BioProvider = ({children})=>{
    const myName = "Vraj Patel"
    const myAge = 21;


    return(
        <BioContext.Provider value={{ myName,myAge }}>
            {children}
        </BioContext.Provider>
    )
}


// reate custom hooks

export const useBioContext = ()=>{
    const context = useContext(BioContext)
    return context
}