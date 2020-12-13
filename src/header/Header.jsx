import React from "react";
import check from "../logos/check.svg";
import add from "../logos/add.svg";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eaedf3;
  h1 {
      font-size: 20px;
  }
`;
const LogoContainer = styled.div`
  margin-left: 25px;
  display: flex;
  h2 {
    font-size: 16px;
  }
  img {
    margin-right: 18px;
  }
`;
const AddTask = styled.div`
  margin-right: 25px;
`;
const AddTaskButton = styled.button`
    cursor: pointer;
    width: 120px;
    display: flex;
    background-color: #34AA44;
    color: white;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
    font-size: 14px;
    transition: .5s
    :hover {
        background-color: #2f993d;
    }
    :active {
        background-color: #2a8836;
        border: none;
    }
    img {
        margin-right: 10px;
    }
`;

function Header(props) {
  let { pageType, setPageType } = props;
  return (
    <HeaderContainer>
      <LogoContainer className="logo">
        <img src={check} alt="check mark with rectangle around it" />
        <h2>To Done</h2>
      </LogoContainer>
      <h1>{pageType !== "tasks" ? pageType : ""}</h1>
      <AddTask>
        <AddTaskButton onClick={() => setPageType("Add Task")}>
          <img src={add} alt="add sign with circle around it" />
          <p>Add Task</p>
        </AddTaskButton>
      </AddTask>
    </HeaderContainer>
  );
}

export default Header;
