const TaskItem = ({ task }) => {

    return (
        <div className="task-item">
            <span className="task-item__name">{ task }</span>
        </div>
    )
}

export default TaskItem;