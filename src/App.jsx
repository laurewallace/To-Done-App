import React, { useState } from "react";
import "./App.css";
import Header from "./header/Header";

function App() {
  const [pageType, setPageType] = useState("tasks");
  return (
    <div className="App">
      <Header pageType={pageType} setPageType={setPageType} />
    </div>
  );
}

export default App;
