import { useState } from "react"
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDateTime } from "./TodoDateTime";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./ToLocalStorage";




export const Todo = () => {
    const [task, setTask] = useState(() => getLocalStorageTodoData())



    const handleFormSubmit = (inputValue) => {

        const { id, content, checked } = inputValue

        if (!content) return; //does not store empty string 

        // if (task.includes(inputValue)) return;
        //doesnot store same value
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content)
        if (ifTodoContentMatched) return;

        // here {id:id , content:content, checked:checekd}  but all are same so we can write this way
        setTask((prevTask) => [...prevTask, { id, content, checked }])



    }

    //add data to localStorage
  setLocalStorageTodoData(task);

    //handle delete data 
    const handleDeleteTodo = (value) => {
        // console.log(task);
        // console.log(value);

        const updatedTask = task.filter((curTask) => curTask.content !== value)
        setTask(updatedTask)

    }

    //to delete all data
    const handleCleaerAllBtn = () => {
        setTask([])
    }

    //to checked (line on the data) data
    const handleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked }
            }
            else {
                return curTask;
            }


        })
        setTask(updatedTask)
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
                    {task.map((curTask) => {
                        return (
                            <TodoList
                                key={curTask.id}
                                curTask={curTask.content}
                                checked={curTask.checked}
                                onHandleDeleteTodo={handleDeleteTodo}
                                onHandleCheckedTodo={handleCheckedTodo}
                            />
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