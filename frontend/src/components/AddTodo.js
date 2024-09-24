import { useState } from "react";

const AddTodo = ({addTodo}) => {

    const [input, setInput] = useState('')

    const handleAdd = () => {
        addTodo(input);
        setInput('');
    }

    return (
        <div className="add-todo">
            <input onChange={(e) => setInput(e.target.value)} className="add-input" type='text' />
            <button onClick={handleAdd} className="add-button">Add Todo</button>
        </div>
    )
}

export default AddTodo;