import { useState } from "react"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";

export const Todo = () => {
    const [task, setTask] = useState([])



    const handleFormSubmit = (inputValue) => {


        if (!inputValue) return; //does not store empty string

        if (task.includes(inputValue)) return;
        //doesnot store same value

        setTask((prevTask) => [...prevTask, inputValue])


    }


   

    const handleDeleteTodo = (value) => {
        console.log(task);
        console.log(value);

        const updatedTask = task.filter((curTask) => curTask !== value)
        setTask(updatedTask)

    }


    const handleCleaerAllBtn = () => {
        setTask([])
    }

    return (
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
                
                <TodoDateTime />

            </header>


            <TodoForm onAddTodo={handleFormSubmit} />

            <section className="myUnOrderList">
                <ul>
                    {task.map((curTask, index) => {
                        return (
                            <TodoList key={index}  curTask={curTask} onHandleDeleteTodo={handleDeleteTodo} />
                        )
                    })}
                </ul>

            </section>


            <section>
                <button className="clear-btn" onClick={handleCleaerAllBtn}>Clear All</button>
            </section>
        </section>
    )
}