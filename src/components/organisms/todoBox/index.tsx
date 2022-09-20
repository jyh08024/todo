import React from "react";
import { TodoBoxStyled } from "./styled";
import TodoForm from "../../molecule/todoForm";

const TodoBox = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  return (
    <TodoBoxStyled>
      <div className="todoBox leftBox">
        <div className="box_title">
          <h2>To-Do-List</h2>
          <h4>{year}년 {`${month + 1}`.padStart(2, '0')}월 {`${day}`.padStart(2, '0')}일</h4>
        </div>

        <TodoForm />

        <h2>중요한 할일</h2>

        <div className="important_list">
          
        </div>
      </div>

      <div className="todoBox rightBox">
        
      </div>
    </TodoBoxStyled>
  );
};

export default TodoBox;