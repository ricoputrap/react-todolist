const TaskList = () => {

    const taskList = ["Breakfast", "Watch news", "Read a productivity book"];

    return (
        <div className="task-list">

            {taskList.map(task => (
                <div className="task-item">{ task }</div>
            ))}

        </div>
    )
}

export default TaskList;