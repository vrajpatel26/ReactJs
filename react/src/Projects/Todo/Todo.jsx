import { useState } from "react"

export const Todo = () => {
    const [inputValue,setInputValue] = useState("")
    const [task,setTask] = useState([])

    const handleInputChange = (value) =>{
        setInputValue(value)
    }

    const handleFormSubmit =(event)=>{
        event.preventDefault()

        if(!inputValue) return;

        setTask((prevTask)=> [...prevTask,inputValue])

        setInputValue("")
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo Lists</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input
                            type="text"
                            className="todo-input"
                            autoComplete="off"
                            value={inputValue}
                            onChange={(event)=> handleInputChange(event.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn">
                            Add Task
                        </button>
                    </div>
                </form>
            </section>
        </section>
    )
}