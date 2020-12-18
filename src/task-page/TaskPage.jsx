import React from "react";
import styled from 'styled-components'

import TaskCard from './TaskCard'
import TaskDetail from './TaskDetail'
import NewTaskForm from './NewTaskForm'

const TaskContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 30px;
`

const TaskPage = (props) => {
  let { tasks, pageType, setPageType, cardSelected, setCardSelected, edit, setEdit, addedTask, setAddedTask } = props;
  let taskDetail = pageType !== 'tasks' && pageType !== 'Add Task'
  return (
    <TaskContainer>
      {!tasks.length && pageType === 'tasks' && <div>No Tasks Added Yet</div>}
      {pageType === 'tasks' && tasks.map((task, idx) => (
        <TaskCard task={task} setPageType={setPageType} key={idx} setCardSelected={setCardSelected} />
      ))}
      {taskDetail && <TaskDetail cardSelected={cardSelected} edit={edit} setEdit={setEdit} />}
      {pageType === 'Add Task' && <NewTaskForm addedTask={addedTask} setAddedTask={setAddedTask} />}
    </TaskContainer>
  );
};

export default TaskPage;
