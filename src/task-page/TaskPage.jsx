import React from "react";
import styled from 'styled-components'

import TaskCard from './TaskCard'

const TaskContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #FBFBFD;
    padding-top: 30px;
`

const TaskPage = (props) => {
  let { tasks, pageType, setPageType } = props;
  let taskDetail = pageType !== 'tasks' && pageType !== 'Add Task'
  return (
    <TaskContainer>
      {pageType === 'tasks' && tasks.map((task, idx) => (
        <TaskCard task={task} setPageType={setPageType} key={idx}>hello</TaskCard>
      ))}
      {taskDetail && <div>hello</div>}
      {pageType === 'Add Task' && <div>form</div>}
    </TaskContainer>
  );
};

export default TaskPage;
