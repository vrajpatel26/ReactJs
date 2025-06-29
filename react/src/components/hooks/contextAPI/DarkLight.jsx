import { createContext, use, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("dark")

    const handleToggleButton = () => {
        return setTheme((prevTheme) => prevTheme === "dark" ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={{ theme, handleToggleButton }}>
            {children}
        </ThemeContext.Provider>
    )
}


//creating component

export const DarkLight = () => {

    const { theme, handleToggleButton } = use(ThemeContext)

    return (
        <div className={`p-4 flex flex-col justify-center items-center h-lvh ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>

            <h1 className={`${theme === "dark" ? "text-white" : "text-black"}  
            p-5  font-bold text-3xl`}>Dark Light Theme</h1>

            <button onClick={handleToggleButton} className={` p-3 border-red-500    rounded-full bg-blue-500  border-solid ${theme === "dark" ? "text-white" : "text-black"}`}>
            {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
        </div >
    )
}