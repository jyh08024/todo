import React, {useEffect, useMemo, useState} from 'react';
import { TodoListStyle } from "./styled";
import TodoItem  from "./components/atoms/todoItem";
import TodoBox from "./components/organisms/todoBox";

const ls = localStorage;

const App = () => {
  console.log('asd');
  return (
    <TodoListStyle>
      <TodoBox></TodoBox>
    </TodoListStyle>
  );
};

export default App;