import React from "react";
import Task from "./Task";



const Tasks = ({tasks, handleTaskClick, handleTaskDeleted}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task task={task} handleTaskClick={handleTaskClick} handleTaskDeleted={handleTaskDeleted}
                
                />
            ))};
        </>
    );
};

export default Tasks;