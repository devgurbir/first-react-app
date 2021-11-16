import { useState } from "react";
import DeleteButton from "./Delete";

function TodoItem({id, taskItem, taskStatus, onClick}){
    return (
        <div>
            <span>{taskItem}</span>
             <span> | </span>
            <span>{ taskStatus ? "true" : "false"}</span>
            <span> | </span>
            <DeleteButton id = {id} onClick = {onClick} />
        </div>
    )
}

export default TodoItem