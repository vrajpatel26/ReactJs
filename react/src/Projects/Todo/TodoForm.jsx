import { useState } from "react"

export const TodoForm = ({ onAddTodo }) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (value) => {
        setInputValue(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        onAddTodo(inputValue)

        setInputValue("")
    }

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input
                        type="text"
                        className="todo-input"
                        autoComplete="off"
                        value={inputValue}
                        onChange={(event) => handleInputChange(event.target.value)}
                        placeholder="Enter Task"
                    />
                </div>
                <div>
                    <button type="submit" className="todo-btn">
                        Add Task
                    </button>
                </div>
            </form>
        </section>

    )
}