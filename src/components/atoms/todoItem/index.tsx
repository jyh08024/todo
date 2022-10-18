import React from "react";
import { TodoItemStyled } from "./styled";

const TodoItem = ({
  title,
  idx,
  isComplete,
  isImportant,
  addedDate,
}: any) => {
  return (
    <TodoItemStyled 
      className={isComplete ? "complete" : ""} 
      title={title}
      data-idx={idx}
      >
      
    </TodoItemStyled>
  )
}

export default TodoItem;