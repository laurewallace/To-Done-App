import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div``;
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
    <form>
      <InputContainer className="title">
        <label>Task Name*</label>
        <input type="text" name="title" onChange={handleChange} />
      </InputContainer>
      <InputContainer className="thumbnail">
        <label>Thumbnail</label>
        <div></div>
        <input type="url" name="thumbnail" onChange={handleChange} />
      </InputContainer>
      <InputContainer className="description">
        <label>Description</label>
        <input type="text" name="description" onChange={handleChange} />
      </InputContainer>
      <div className="labels">
        <label>Labels</label>
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
        <input type="text" name="notes" onChange={handleChange} />
      </InputContainer>
    </form>
  );
};
export default NewTaskForm;
