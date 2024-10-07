import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask(''); // Clear the input field
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="p-4 bg-gray-100 h-screen">
      <h1 className="text-xl font-bold mb-4">Liste des tâches</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ajouter une tâche"
        className="border border-gray-300 p-2 mb-4"
      />
      <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 mb-4">
        Ajouter
      </button>
      <ul className="list-disc pl-5">
        {tasks.map((task, index) => (
          <li key={index} className="mb-2">
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              className="ml-4 text-red-500"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
