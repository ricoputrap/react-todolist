import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import "./App.css";

const App = () => {

  return (
    <div className="root">

      <AddTask />
      
      <TaskList />
    </div>
  )
}

export default App;