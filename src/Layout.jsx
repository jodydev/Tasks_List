import React, { useState } from 'react';
import ListForm from './components/ListForm';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

export default function Layout() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Date.now(),
        content: newTask,
        done: false,
      },
    ]);
  };

  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };


// Convalida Task
const doneTask = (taskId, done) => {
  setTasks((prev) => {
    return prev.map((task) => {
      if (task.id === taskId) {
        return { ...task, done };
      }
      return task;
    });
  });
};





  return (
    <>
      <Navbar />
      <ListForm addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} doneTask={doneTask} />
      <Footer />
    </>
  );
}
