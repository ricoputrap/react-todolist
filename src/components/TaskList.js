import TaskItem from "./TaskItem";

const TaskList = () => {

    const taskList = ["Breakfast", "Watch news", "Read a productivity book"];

    return (
        <div className="task-list">

            {taskList.map(sebuahTask => (
                <TaskItem task={sebuahTask} key={ sebuahTask } />
            ))}

        </div>
    )
}

export default TaskList;