import React from "react";
import styled from 'styled-components'

import TaskCard from './TaskCard'
import TaskDetail from './TaskDetail'

const TaskContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 30px;
`

const TaskPage = (props) => {
  let { tasks, pageType, setPageType, cardSelected, setCardSelected, edit, setEdit } = props;
  let taskDetail = pageType !== 'tasks' && pageType !== 'Add Task'
  return (
    <TaskContainer>
      {pageType === 'tasks' && tasks.map((task, idx) => (
        <TaskCard task={task} setPageType={setPageType} key={idx} setCardSelected={setCardSelected} />
      ))}
      {taskDetail && <TaskDetail cardSelected={cardSelected} edit={edit} setEdit={setEdit} />}
      {pageType === 'Add Task' && <div>form</div>}
    </TaskContainer>
  );
};

export default TaskPage;
