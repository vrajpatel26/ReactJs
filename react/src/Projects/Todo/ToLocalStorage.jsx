const todoItems = "localTodoData" //localstorage data.


export const getLocalStorageTodoData = () => {
    const rawTodo = localStorage.getItem(todoItems)

    if (!rawTodo) return [];

    return JSON.parse(rawTodo)
}

export const setLocalStorageTodoData = (task) => {
  return localStorage.setItem(todoItems, JSON.stringify(task))
}