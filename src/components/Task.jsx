import React from "react";
import "../Task.css";
 
const Task = ({task, handleTaskClick, handleTaskDeleted}) => {
    return (
        <div className="task-container" style={task.completed ? {borderLeft: '6px solid blue'} : {}}>
            <div className="task-title" onClick={() => handleTaskClick (task.id)}> 
            {task.title}
            </div>

            <div className="buttons-container">
                <button className="remove-task-button" onClick={() => handleTaskDeleted(task.id)}>X</button>
            </div>

        </div>
    )
    // return <div className="task-container">{task.title};</div>
};
export default Task;