import { useState } from "react";

function TodoInput(props){
    const {onTaskCreate} = props;
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        onTaskCreate(text)
    }
    return (
        <div>
        <input type="text" value={text} onChange={handleChange} placeholder="Add a todo" />
        <button onClick= {handleClick}>Add Item</button>
        </div>
    )
}

export default TodoInput