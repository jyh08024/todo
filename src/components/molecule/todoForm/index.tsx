import React, { useEffect, useMemo, useState } from 'react';
import { TodoFormStyle } from "./styled";
import TodoInput from "../../atoms/enrinput";

const TodoForm = ({dataAdd, inputValue, onChange}: any) => {
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