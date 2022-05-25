import React from "react";
import { TodoItemStyled } from "./styled";

interface TodoListTypeInfo {
  // title: string;
  // idx: number;
  isComplete: boolean;
  // onRemove: any;
  // onCompletion: any;
}

const TodoItem = ({
  // title,
  // idx,
  isComplete,
  // onRemove,
  // onCompletion,
}: TodoListTypeInfo) => {
  return (
    <TodoItemStyled className={isComplete ? "complete" : ""}>
      
    </TodoItemStyled>
  )
}

export default TodoItem;