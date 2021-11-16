import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function Todo(){
    const [todos, setTodos] = useState([]);
    const handleTaskCreate = (title) => {
        const payload = {
            title: title,
            status: false,
            id: todos.length + 1
        }
        setTodos([ ...todos, payload ]);
    }

    const handleDelete = (e) => {
        // e.target.name
        const filteredTodos = todos.filter( el => {
            return el.id != e.target.name
        })
        setTodos(filteredTodos)
    }

    return (
        <div>
            <TodoInput onTaskCreate={handleTaskCreate} />
            
            {
                todos.map( el => {
                    return (
                    <TodoItem key = {el.id} taskItem = {el.title} taskStatus = {el.status} id = {el.id} onClick = {handleDelete} />
                    )
                })
            }
        </div>
    )
}

export default Todo