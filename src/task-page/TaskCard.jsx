import React from "react";
import styled from "styled-components";
import calendar from "../logos/calendar.svg";

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
  .date, .description {
      margin: 5px 0;
      line-height: 22px;
  }
  .description {
      color: #9EA0A5;
      margin-bottom: 30px;
  }
`;
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
  button {
    text-transform: uppercase;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 3px 10px;
    font-family: 'Roboto', sans-serif;
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
  let { task, setPageType } = props;
  return (
    <CardContainer onClick={() => setPageType(task.title)} tabindex="0">
      <Thumbnail image={task.thumbnail} />
      <Tags>
        {task.labels.map((label, idx) => (
          <button className={label} key={idx}>
            {label}
          </button>
        ))}
      </Tags>
      <h2>{task.title}</h2>
      <p class='description'>{task.description}</p>
      <DateDisplay>
        <img src={calendar} alt="" />
        <p class='date'>{task.date}</p>
      </DateDisplay>
    </CardContainer>
  );
};

export default TaskCard;
