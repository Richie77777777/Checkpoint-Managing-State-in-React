const TaskItem = ({ task, deleteTask, toggleComplete, startEditing }) => {
    return (
      <div style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
        <button onClick={() => toggleComplete(task.id)}>
          {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button onClick={() => startEditing(task)}>Edit</button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    );
  };
  
  export default TaskItem;
  