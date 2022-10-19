import React, {useEffect, useMemo, useState} from 'react';
import { TodoBoxStyled } from "./styled";
import TodoForm from "../../molecule/todoForm";

const ls = localStorage['todo'];

interface TodoItemTypes {
  idx: number;
  content: string;
  isComplete: Boolean;
  isImportant: Boolean;
  addedDate: string;
}

const completeCount = (list: Array<TodoItemTypes>) => {
  const completeList = list.filter(v => v.isComplete).length;
  return [list.length - completeList, completeList];
}

const getFullDate = (date: any) => {
  return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
}

const TodoBox = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  const [list, setList] = useState<Array<TodoItemTypes>>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setList(JSON.parse(ls || "[]"));
  }, []);

  useEffect(() => {
    localStorage['todo'] = JSON.stringify(list);
  }, [list]);

  const onChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const dataAdd = (e: any) => {
    e.preventDefault();

    if (inputValue.trim() == "" ) return alert('일정을 입력해주세요.');

    const data: TodoItemTypes = {
      idx: list.length + 1,
      content: inputValue,
      isComplete: false,
      isImportant: false,
      addedDate: getFullDate(new Date()),
    };

    setList([...list, data]);
    setInputValue("");
  }
  
  const count = useMemo(() => completeCount(list), [list || []]);

  return (
    <TodoBoxStyled>
      <div className="todoBox leftBox">
        <div className="box_title">
          <h2>To-Do-List</h2>
          <h4>{year}년 {`${month + 1}`.padStart(2, '0')}월 {`${day}`.padStart(2, '0')}일</h4>
          <h1>할일: {count[0]}개 / 끝낸 일: {count[1]}개</h1>
        </div>

        <TodoForm dataAdd={dataAdd} inputValue={inputValue} onChange={onChange} />

        <h2>중요한 할일</h2>

        <div className="important_list">
          
        </div>
      </div>

      <div className="todoBox rightBox">
        
      </div>
    </TodoBoxStyled>
  );
};

export default TodoBox;