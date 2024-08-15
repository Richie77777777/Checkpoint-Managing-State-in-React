import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, taskToEdit, setTaskToEdit }) => {
  const [task, setTask] = useState({ name: '', description: '' });

  useEffect(() => {
    if (taskToEdit) {
      setTask(taskToEdit);
    }
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.name && task.description) {
      if (taskToEdit) {
        editTask(task);
      } else {
        addTask(task);
      }
      setTask({ name: '', description: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={task.name}
        onChange={handleChange}
        placeholder="Task Name"
      />
      <input
        type="text"
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
