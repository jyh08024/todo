import React, { useEffect, useMemo, useState } from 'react';
import { TodoFormStyle } from "./styled";
import TodoInput from "../../atoms/enrinput";

const TodoForm = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const onChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const dataAdd = (e: any) => {
    e.preventDefault();
  }

  return (
    <TodoFormStyle>
      <div className="enr_form">
        <TodoInput 
          value={inputValue} 
          onchange={onChange} 
          dataAdd={dataAdd}
        />
      </div>
    </TodoFormStyle>
  );
};

export default TodoForm;