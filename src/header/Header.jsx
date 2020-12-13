import React from "react";
import check from "../logos/check.svg";
import add from '../logos/add.svg'

function Header() {
  return (
    <div>
      <div className="logo">
        <img src={check} alt="check mark with rectangle around it" />
        <h2>To Done</h2>
      </div>
      <div>
          <button>
            <img src={add} alt="add sign with circle around it"/>
            <p>Add Task</p>
          </button>
      </div>
    </div>
  );
}

export default Header;
