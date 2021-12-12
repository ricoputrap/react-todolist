import { useState } from "react";

const AddTask = () => {
    
    // state variabel & fungsi setter-nya
    const [taskName, setTaskName] = useState("");

    const onInputChange = e => {
        const newTaskName = e.target.value;
        console.log("newTaskName:", newTaskName);

        // update nilai variabel `taskName`
        setTaskName(newTaskName);
    }

    const onSubmit = () => {
        console.log("SUBMIT - NEW TASK NAME:", taskName);
    }
    
    return (
        <div className="add-task">
            <input 
                type="text"
                name="taskName" 
                id="taskName"
                onChange={ onInputChange }
                value={ taskName }
            />
            <button onClick={ onSubmit }>ADD</button>
        </div>
    )
}

export default AddTask;