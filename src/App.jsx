import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid'

import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";


const App = () => {
  // let message = "hello wrold";
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title:'Vender o carro amarelo',
      completed: false,
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id == taskId) return {... task, completed: !task.completed}
      return task;
    })

    setTasks(newTasks);
   
    
  }

  const handleTaskDeleted = (taskId) => {
    const newtasks = tasks.filter(task => task.id !== taskId)
    setTasks(newtasks)
  }

  const handleTaskAddition  = (taskTitle) => {
    const newTasks  = [... tasks, {
      title: taskTitle,
      id: uuidv4,
      completed: false,
    }]

    setTasks(newTasks);
  }

    return( 
      <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition}/>
        <Tasks  tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeleted={handleTaskDeleted}/>
      </div>
      </>
    );
};

export default App