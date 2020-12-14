import React from "react";
import styled from 'styled-components'

import TaskCard from './TaskCard'

const TaskContainer = styled.div`
    display: flex;
    
`

const TaskPage = (props) => {
  let { tasks, setTasks } = props;
  console.log(tasks)
  return (
    <TaskContainer>
      {tasks.map((task, idx) => (
        <TaskCard task={task} key={idx}>hello</TaskCard>
      ))}
    </TaskContainer>
  );
};

export default TaskPage;
