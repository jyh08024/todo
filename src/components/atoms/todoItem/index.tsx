import React from "react";
import { TodoItemStyled } from "./styled";

const TodoItem = ({
  title,
  idx,
  isComplete,
  isRemove,
  isCompletion,
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