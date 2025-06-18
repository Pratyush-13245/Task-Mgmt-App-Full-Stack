import './App.css';
import TaskForm from './components/TaskForm.js';
import TaskList from './components/TaskList.js';

function App() {
    const handleTaskCreated = (newTask) => {
    console.log("Task created:", newTask);
    // Optionally update a task list or show a success message
  };

  return (
    <div className="App">
       <h1>Task Management App</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskList/>
    </div>
  );
}

export default App;
