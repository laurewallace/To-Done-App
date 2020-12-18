import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import TaskPage from "./task-page/TaskPage";

function App() {
  const [pageType, setPageType] = useState("tasks");
  const [cardSelected, setCardSelected] = useState("");
  const [edit, setEdit] = useState(false);
  const [addedTask, setAddedTask] = useState({title: '', thumbnail: '', description: '', labels: [], date: '', notes: ''})
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Header pageType={pageType} setPageType={setPageType} tasks={tasks} setTasks={setTasks} cardSelected={cardSelected} edit={edit} setEdit={setEdit} addedTask={addedTask} setAddedTask={setAddedTask} />
      <TaskPage
        tasks={tasks}
        setTasks={setTasks}
        setPageType={setPageType}
        pageType={pageType}
        setCardSelected={setCardSelected}
        cardSelected={cardSelected}
        edit={edit}
        addedTask={addedTask}
        setAddedTask={setAddedTask}
      />
    </div>
  );
}

export default App;
