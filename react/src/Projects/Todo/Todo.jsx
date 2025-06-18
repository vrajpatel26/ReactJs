import { useState } from "react"
import { MdDeleteForever, MdCheck } from "react-icons/md";

export const Todo = () => {
    const [inputValue, setInputValue] = useState("")
    const [task, setTask] = useState([])
    const [dateTime,setDateTime] = useState("")

    const handleInputChange = (value) => {
        setInputValue(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        if (!inputValue) return; //does not store empty string

        if (task.includes(inputValue)) {
            setInputValue("")
            return;
        }//doesnot store same value

        setTask((prevTask) => [...prevTask, inputValue])

        setInputValue("")
    }


    setInterval(() => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedDate} - ${formattedTime}`)  

    }, 1000);

    const handleDeleteTodo = (value) =>{
console.log(task);
console.log(value);

const updatedTask = task.filter((curTask)=> curTask !== value)
setTask(updatedTask)

    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                <h2>{dateTime}</h2>
            </header>
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


            <section className="myUnOrderList">
                <ul>
                    {task.map((curTask, index) => {
                        return (
                            <li key={index}>
                                <span clas>{curTask}</span>
                                <div className="btn-group">
                                <button className="check-btn">
                                    <MdCheck />
                                </button>
                                <button className="delete-btn" onClick={()=>handleDeleteTodo(curTask)}>
                                    <MdDeleteForever />
                                </button>
                                </div>
                            </li>
                        )
                    })}
                </ul>

            </section>
        </section>
    )
}