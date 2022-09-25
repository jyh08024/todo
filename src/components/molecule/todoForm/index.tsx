import React, { useEffect, useMemo, useState } from 'react';
import { TodoFormStyle } from "./styled";
import TodoInput from "../../atoms/enrinput";

const TodoForm = ({dataAdd}: any) => {
  const [inputValue, setInputValue] = useState<string>("");

  const onChange = (e: any) => {
    setInputValue(e.target.value);
  };

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