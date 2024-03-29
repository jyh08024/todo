import React from "react";
import { EnrInputStyle } from "./styled";

interface SearchTypes {
  value: string;
  onchange: any;
  dataAdd: any;
}

const TodoInput = ({ value, onchange, dataAdd }: SearchTypes) => {
  return (
    <EnrInputStyle onSubmit={dataAdd}>
      <input type="text"
        value={value}
        onChange={onchange}
        placeholder="일정을 입력해주세요."
      />

      <button className="btn enrBtn">등록</button>
    </EnrInputStyle>
  );
};

export default TodoInput;