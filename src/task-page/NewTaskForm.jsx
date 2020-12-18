import React, { useState } from "react";
import styled from "styled-components";

const NewTask = styled.form`
  width: 490px;
  border: 1px solid #eaedf3;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 55px;
  label {
    color: #9ea0a5;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: normal;
    margin-top: 0;
    margin-bottom: 10px;
  }
  textarea {
    border-radius: 5px;
    border: 1px solid #eaedf3;
    margin-bottom: 25px;
    height: 35px;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    padding: 8px 15px;
    max-height: 100px;
    max-width: 490px;
    &:focus {
      border-radius: 5px;
      border: 1px solid #1665D8;
    }
  }
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border-radius: 5px;
    border: 1px solid #eaedf3;
    margin-bottom: 25px;
    height: 35px;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    padding-left: 15px;
    &:focus {
      border-radius: 5px;
      border: 1px solid #1665D8;
    }
  }
`;
const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 25px 0;
  input {
    margin-right: 5px;
  }
  div {
    display: flex;
    align-items: center;
  }
  p {
    text-transform: uppercase;
    color: white;
    border-radius: 5px;
    border: none;
    padding: 4px 8px;
    margin: 0;
    font-size: 12px;
    display: inline-block;
  }
  .work p {
    background-color: #6758f3;
  }
  .important p {
    background-color: #f6ab2f;
  }
  .personal p {
    background-color: #1665d8;
  }
  .family p {
    background-color: #34aa44;
  }
`;
const NewTaskForm = (props) => {
  const [isWork, setIsWork] = useState(false);
  const [isFamily, setIsFamily] = useState(false);
  const [isPersonal, setIsPersonal] = useState(false);
  const [isImportant, setIsImportant] = useState(false);
  const { addedTask, setAddedTask } = props;
  const handleChange = (event) => {
    let name = event.target.name;
    if (event.target.type === "checkbox") {
      switch (event.target.value) {
        case "work":
          setIsWork(!isWork);
          break;
        case "family":
          setIsFamily(!isFamily);
          break;
        case "personal":
          setIsPersonal(!isPersonal);
          break;
        case "important":
          setIsImportant(!isImportant);
      }
      if (event.target.checked) {
        addedTask.labels.push(event.target.value);
      } else {
        let index = addedTask.labels.indexOf(event.target.value);
        index !== -1 && addedTask.labels.splice(index, 1);
      }
    } else if (name === "date") {
      let date = event.target.value;
      let dateArray = date.split("-");
      dateArray = [dateArray[1], dateArray[2], dateArray[0]];
      date = dateArray.join("/");
      addedTask.date = date;
    } else {
      addedTask[name] = event.target.value;
    }
    setAddedTask(addedTask);
  };
  return (
    <NewTask>
      <InputContainer className="title">
        <label>Task Name *</label>
        <input type="text" name="title" onChange={handleChange} />
      </InputContainer>
      <InputContainer className="thumbnail">
        <label>Thumbnail URL</label>
        <input type="url" name="thumbnail" onChange={handleChange} />
      </InputContainer>
      <InputContainer className="description">
        <label>Description</label>
        <textarea type="text" name="description" onChange={handleChange} />
      </InputContainer>
      <div className="labels">
        <label>Labels</label>
        <Labels>
          <div className="work">
            <input
              type="checkbox"
              name="tag"
              value="work"
              checked={isWork}
              onChange={handleChange}
            />
            <p>work</p>
          </div>
          <div className="family">
            <input
              type="checkbox"
              name="tag"
              value="family"
              checked={isFamily}
              onChange={handleChange}
            />
            <p>family</p>
          </div>
          <div className="personal">
            <input
              type="checkbox"
              name="tag"
              value="personal"
              checked={isPersonal}
              onChange={handleChange}
            />
            <p>personal</p>
          </div>
          <div className="important">
            <input
              type="checkbox"
              name="tag"
              value="important"
              checked={isImportant}
              onChange={handleChange}
            />
            <p>important</p>
          </div>
        </Labels>
      </div>
      <InputContainer className="date">
        <label>Due Date</label>
        <input
          type="date"
          name="date"
          pattern="\d{2}-\d{2}-\d{4}"
          onChange={handleChange}
        />
      </InputContainer>
      <InputContainer className="notes">
        <label>Notes</label>
        <textarea type="text" name="notes" onChange={handleChange} />
      </InputContainer>
    </NewTask>
  );
};
export default NewTaskForm;
