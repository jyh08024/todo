import React, { useEffect, useMemo, useState } from 'react';
import { TodoListStyle } from "./styled";
import TodoItem from "../../atoms/todoItem";

interface TodoListTypes {
  list: any[];
  onRemove: any;
  onComplete: any;
  onImportant: any;
  isImportant: any;
}

const TodoList = ({list, onRemove, onComplete, onImportant, isImportant}: TodoListTypes) => {
  return (
    <TodoListStyle>
      { list.map((v) => (
        <TodoItem 
          
        />
      )) }
    </TodoListStyle>
  );
};

export default TodoList;