import React from "react";
import { TodoItemStyled } from "./styled";

const TodoItem = ({
  title,
  idx,
  isComplete,
  addedDate,
}: any) => {
  return (
    <TodoItemStyled 
      className={isComplete ? "complete" : ""}
      data-idx={idx}
      >
      
      <h3>{title}</h3>
      <p>등록일: { addedDate }</p>
    </TodoItemStyled>
  )
}

export default TodoItem;