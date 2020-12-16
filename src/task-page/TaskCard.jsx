import React from "react";
import styled from "styled-components";
import calendar from "../logos/calendar.svg";
import check from '../logos/check.svg'

const CardContainer = styled.div`
  position: relative;
  max-width: 335px;
  margin: 15px;
  min-width: 250px;
  padding: 15px;
  border: 2px solid #eaedf3;
  border-radius: 5px;
  background-color: #FFFFFF;
  cursor: pointer;
  :active {
    border: 2px solid black       
  } 
  .date, .description {
      margin: 5px 0;
      line-height: 22px;
  }
  .description {
      color: #9EA0A5;
      margin-bottom: 30px;
  }
  
`;
const Completed = styled.img`
  position: absolute;
  bottom: 15px;
  right: 15px;
`
const Thumbnail = styled.div`
  width: 335px; 
  height: 90px;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;
const Tags = styled.div`
  margin-top: 10px;
  .tag {
    text-transform: uppercase;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 4px 8px;
    margin: 0 8px 0 0;
    font-size: 12px;
    display: inline-block;
  }
  .work {
    background-color: #6758f3;
  }
  .important {
    background-color: #f6ab2f;
  }
  .personal {
    background-color: #1665d8;
  }
  .family {
    background-color: #34aa44;
  }
`;

const DateDisplay = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  img {
    margin-right: 5px;  
  }
`

const TaskCard = (props) => {
  let { task, setPageType, setCardSelected } = props;
  const goToDetails = () => {
    setPageType(task.title)
    setCardSelected(task)
  }
  return (
    <CardContainer onClick={() => goToDetails()} tabindex="0">
      {task.completed && <Completed src={check} alt=""/>}
      <Thumbnail image={task.thumbnail} />
      <Tags>
        {task.labels.map((label, idx) => (
          <p className={label + ' tag'} key={idx}>
            {label}
          </p>
        ))}
      </Tags>
      <h2>{task.title}</h2>
      <p class='description'>{task.description}</p>
      <DateDisplay>
        <img src={calendar} alt="" />
        <p className='date'>{task.date}</p>
      </DateDisplay>
    </CardContainer>
  );
};

export default TaskCard;
