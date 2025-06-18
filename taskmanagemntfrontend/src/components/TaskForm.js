import React, { useState } from 'react';
import axios from 'axios';
import '../components/TaskForm.css'

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate,setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://localhost:7271/api/task', {
        title,
        description,
        isCompleted: false,
        dueDate
      });
      setTitle('');
      setDescription('');
      setDueDate('');
      onTaskCreated(); // refresh list
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  return (
   <form className="task-form" onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Task title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="task-input"
  />
  <textarea
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    className="task-textarea"
  />
<input
    type='Date'
    placeholder='Due Date'
    value={dueDate}
    onChange={(e)=>setDueDate(e.target.value)}
    className='task-DueDate'

>
</input>
  <button type="submit" className="add-btn">Add</button>
</form>

  );
};

export default TaskForm;
