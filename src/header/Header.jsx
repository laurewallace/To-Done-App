import React from "react";
import check from "../logos/check.svg";
import add from "../logos/add.svg";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eaedf3;
  height: 70px;
  background-color: #ffffff;
  h1 {
    font-size: 20px;
    position: absolute;
    width: 100%;
    text-align: center;
  }
`;
const LogoContainer = styled.div`
  margin-left: 25px;
  display: flex;
  img {
    margin-right: 18px;
  }
`;
const AddTaskButton = styled.button`
  margin-right: 25px;
  cursor: pointer;
  width: 120px;
  display: flex;
  background-color: #34aa44;
  color: white;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  transition: 0.3s;
  height: 38px;
  &:hover {
    background-color: #2f993d;
  }
  :active {
    background-color: #2a8836;
  }
  p {
    margin: 10px;
  }
`;
const ButtonContainer = styled.div`
  margin-right: 25px;
`;

const FormButton = styled.button`
  margin-right: 15px;
  cursor: pointer;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid ${(props) => (props.border ? props.border : "#FFFFFF")};
  font-size: 14px;
  transition: 0.3s;
  height: 38px;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.color};
  width: ${(props) => (props.width ? props.width : "85px")};
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  :active {
    background-color: ${(props) => props.activeColor};
  }
`;

function Header(props) {
  let { pageType, setPageType, tasks, setTasks, cardSelected } = props;
  let taskDetail = pageType !== "tasks" && pageType !== "Add Task";
  const markAsComplete = () => {
    setPageType('tasks')
    let index = tasks.indexOf(cardSelected)
    tasks[index].completed = true
    setTasks([...tasks])
    console.log(tasks)
  }
  return (
    <HeaderContainer>
      <LogoContainer className="logo">
        <img src={check} alt="check mark with rectangle around it" />
        <h2>To Done</h2>
      </LogoContainer>
      <h1>{pageType !== "tasks" ? pageType : ""}</h1>
      {pageType === "tasks" && (
        <AddTaskButton
          className="add-task-btn"
          onClick={() => setPageType("Add Task")}
        >
          <img src={add} alt="add sign with circle around it" />
          <p>Add Task</p>
        </AddTaskButton>
      )}
      {pageType === "Add Task" && (
        <ButtonContainer>
          <FormButton
            onClick={() => setPageType("tasks")}
            backgroundColor={"#FFFFFF"}
            border={"#EAEDF3"}
            hoverColor={"#e6e6e6"}
            activeColor={"#cccccc"}
          >
            Cancel
          </FormButton>
          <FormButton
            color={"#FFFFFF"}
            backgroundColor={"#E73C1E"}
            hoverColor={"#d0361b"}
            activeColor={"#b93018"}
          >
            Delete
          </FormButton>
          <FormButton
            color={"#FFFFFF"}
            backgroundColor={"#34aa44"}
            hoverColor={"#2f993d"}
            activeColor={"#2a8836"}
          >
            Save
          </FormButton>
        </ButtonContainer>
      )}
      {taskDetail && (
        <FormButton
          onClick={() => markAsComplete()}
          color={"#FFFFFF"}
          backgroundColor={"#34aa44"}
          hoverColor={"#2f993d"}
          activeColor={"#2a8836"}
          width={"154px"}
        >
          Mark as Complete
        </FormButton>
      )}
    </HeaderContainer>
  );
}

export default Header;
