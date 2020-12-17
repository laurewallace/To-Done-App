import React, { useState } from "react";
import styled from "styled-components";

import calendar from "../logos/calendar.svg";

const DetailContainer = styled.div`
  width: 490px;
  border: 1px solid #eaedf3;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 55px;
  h4 {
    color: #9ea0a5;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    margin-bottom: 24px;
    margin-top: 0;
  }
`;
const Thumbnail = styled.div`
  width: 490px;
  height: 135px;
  background-image: url(${(props) => props.backgroundImg});
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  margin-bottom: 24px;
`;
const Tags = styled.div`
  display: flex;
  margin-bottom: 24px;
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
const Date = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  margin-bottom: 24px;
  img {
    margin-right: 5px;
  }
  p {
    margin: initial;
  }
`;

const TaskDetail = (props) => {
  let { cardSelected, edit} = props;
  return (
    <div>
      {edit ? (
        <div>edit</div>
      ) : (
        <DetailContainer>
          <h4 className="thumbnail-heading">thumbnail</h4>
          <Thumbnail backgroundImg={cardSelected.thumbnail} />
          <h4 className="description-heading">description</h4>
          <p>{cardSelected.description}</p>
          <h4 className="label-heading">labels</h4>
          <Tags>
            {cardSelected.labels.map((label, idx) => (
              <p className={label + " tag"} key={idx}>
                {label}
              </p>
            ))}
          </Tags>
          <h4 className="date-heading">Due Date</h4>
          <Date>
            <img src={calendar} alt="" />
            <p className="date">{cardSelected.date}</p>
          </Date>
          <h4 className="notes-heading">Notes</h4>
          <p>{cardSelected.notes}</p>
        </DetailContainer>
      )}
    </div>
  );
};

export default TaskDetail;
