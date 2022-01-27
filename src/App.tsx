import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import TaskList from './components/TaskList';
import Task from './models/Task';

function App() {
  const [name, setName] = useState<string>('')
  const [tasks, setTasks] = useState<Array<Task>>([])

  const addTask = (e: React.FormEvent) => {
    e.preventDefault()

    if (name) {
      console.log(name);
      
      setTasks([...tasks, { id: Date.now(), name, isDone: false }])
      setName('')
    }
    console.log(tasks);
  }

  return (
    <div className="App">
      <h1>Task</h1>
      <InputField name={name} setName={setName} addTask={addTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
