import React from "react";
import { EnrInputStyle } from "./styled";

interface SearchTypes {
  value: string;
  onchange: any;
}

const TodoInput = ({ value, onchange }: SearchTypes) => {
  return (
    <EnrInputStyle>
      <input type="text"
        value={value}
        onChange={onchange}
        placeholder="일정을 입력해주세요."
      />

      <button className="btn">등록</button>
    </EnrInputStyle>
  );
};

export default TodoInput;