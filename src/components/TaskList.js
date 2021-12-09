import TaskItem from "./TaskItem";

const TaskList = () => {

    const taskList = ["Breakfast", "Watch news", "Read a productivity book"];

    return (
        <div className="task-list">

            {taskList.map(task => (
                <TaskItem data={task} />
            ))}

        </div>
    )
}

export default TaskList;