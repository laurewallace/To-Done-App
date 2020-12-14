import React from "react";
import styled from 'styled-components'
import calendar from '../logos/calendar.svg'

const CardContainer = styled.div`
    max-width: 350px;
`
const Thumbnail = styled.img`
    width: 100%;
`

const TaskCard = (props) => {
    let {task} = props
  return (
    <CardContainer>
      <Thumbnail src={task.thumbnail} alt=""/>
      <div>
      {task.labels.map((label, idx) => (
          <button className={label}>{label}</button>
      ))}
      </div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div>
          <img src={calendar} alt=""/>
          <p>{task.date}</p>
      </div>
    </CardContainer>
  );
};

export default TaskCard;