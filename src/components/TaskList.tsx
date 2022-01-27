import React from 'react';
import Task from '../models/Task';
import "./style.css"
import TaskItem from './TaskItem';

type TaskListProps = {
  tasks: Task[]
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList: React.FC<TaskListProps> = ({ tasks, setTasks }) => {
  return <div className='todos'>
    {tasks.map((task) => {
      <TaskItem task={task} tasks={tasks} setTasks={setTasks} />
    })}
  </div>;
};

export default TaskList;
