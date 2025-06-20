import { useState } from "react"
import "./Projects/Todo/Todo.css"
import { TodoList } from "./Projects/Todo/TodoList"
import { MdDeleteForever } from "react-icons/md"



export const Keys = () =>{
    const [task,setTask] = useState([])
    const [inputValue , setinputValue] = useState("")

    const handleInputChange=(value)=>{
        setinputValue(value)
    }


    const handleFormSubmit = (event) =>{
        event.preventDefault();

        if(!inputValue) return ;

        if(task.includes(inputValue)){
             setinputValue("");
             return;
        }

        setTask((prevTask)=> [inputValue,...prevTask])
        setinputValue("")
    }
    console.log(task);
    
    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section id="form">
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
                    <button type="submit" className="todo-btn">Add Task</button>
                </form>
            </section>
            <section className="myUnOrderList">
                <ul className="todo-list">
                    {task.map((curTask,index)=>{
                        return <TodoLists key={index} data={curTask} />
                    })}
                </ul>
            </section>
        </section>
    )
}


const TodoLists = ({data}) =>{
    return(
        <li className="todo-item">
            <span>{data}</span>
            <input type="text" />

            <button>
                <MdDeleteForever className="delete-btn" />
            </button>
        </li>
    )
}
