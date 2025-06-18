import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [visible, setVisible] = useState(false);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('https://localhost:7271/api/task');
      setTasks(response.data);
      setVisible(true);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://localhost:7271/api/task/${id}`);
      fetchTasks(); // Refresh task list after deletion
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  const toggleStatus = async (id)=>
  {
    try{
        await axios.put(`https://localhost:7271/api/task/${id}/toggle`,{});
        fetchTasks();
    }
    catch(err)
    {
        console.log(err);
    }
  };


  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={fetchTasks}>Show Tasks</button>

      {visible && (
        <table
          border="1"
          cellPadding="10"
          style={{
            marginTop: '10px',
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left'
          }}
        >
          <thead style={{ backgroundColor: '#f0f0f0' }}>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length === 0 ? (
              <tr>
                <td colSpan="4">No tasks found.</td>
              </tr>
            ) : (
              tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>{task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '—'}</td> {/* ✅ */}
                   <td>{task.isCompleted ? '✅ Completed' : '❌ Incomplete'}</td>
                  <td>
                        <button onClick={() => toggleStatus(task.id)} style={{ marginRight: '10px' }}>
                            {task.isCompleted ? 'Mark Incomplete' : 'Mark Complete'}
                        </button>
                        <button
                            onClick={() => handleDelete(task.id)}
                            style={{
                            backgroundColor: '#ff4d4d',
                            color: 'white',
                            border: 'none',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            cursor: 'pointer'
                            }}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TaskList;
