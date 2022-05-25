import React from "react";
import { TodoBoxStyled } from "./styled";

const TodoBox = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  return (
    <TodoBoxStyled>
      <div className="todoBox leftBox">
        <h2>ToDo</h2>
        <h4>{year}-{`${month}`.padStart(2, '0')}-{`${day}`.padStart(2, '0')}</h4>
      </div>

      <div className="todoBox rightBox">
        
      </div>
    </TodoBoxStyled>
  );
};

export default TodoBox;