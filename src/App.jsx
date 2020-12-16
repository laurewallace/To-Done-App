import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import TaskPage from "./task-page/TaskPage";

function App() {
  const [pageType, setPageType] = useState("tasks");
  const [cardSelected, setCardSelected] = useState("");
  const [tasks, setTasks] = useState([
    {
      title: "First",
      thumbnail:
        "https://visualsound.com/wp-content/uploads/2019/05/unavailable-image.jpg",
      description:
        "first thing, so cool. lets do it. this is a really really cool thing and we need to do it immediately",
      labels: ["work"],
      date: "12/20/20",
      completed: false,
    },
    {
      title: "Second",
      thumbnail:
        "https://visualsound.com/wp-content/uploads/2019/05/unavailable-image.jpg",
      description: "second thing, so cool. lets do it",
      labels: ["personal"],
      date: "12/20/20",
      completed: false,
    },
    {
      title: "Third",
      thumbnail:
        "https://visualsound.com/wp-content/uploads/2019/05/unavailable-image.jpg",
      description: "second thing, so cool. lets do it",
      labels: ["family", "important"],
      date: "12/20/20",
      completed: false,
    },
  ]);
  return (
    <div className="App">
      <Header pageType={pageType} setPageType={setPageType} tasks={tasks} setTasks={setTasks} cardSelected={cardSelected} />
      <TaskPage
        tasks={tasks}
        setTasks={setTasks}
        setPageType={setPageType}
        pageType={pageType}
        setCardSelected={setCardSelected}
        cardSelected={cardSelected}
      />
    </div>
  );
}

export default App;
