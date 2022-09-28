import React, {useEffect, useMemo, useState} from 'react';
import { TodoBoxStyled } from "./styled";
import TodoForm from "../../molecule/todoForm";

const ls = localStorage;

const TodoBox = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  const [list, setList] = useState<any>();

  useEffect(() => {
    const isLs = ls['jyh_todo'];

    setList(() => JSON.parse(ls['jyh_todo']) || []);
  }, []);

  useEffect(() => {

  }, [list]);

  const dataAdd = (e: any) => {
    e.preventDefault();

    
  }

  return (
    <TodoBoxStyled>
      <div className="todoBox leftBox">
        <div className="box_title">
          <h2>To-Do-List</h2>
          <h4>{year}년 {`${month + 1}`.padStart(2, '0')}월 {`${day}`.padStart(2, '0')}일</h4>
        </div>

        <TodoForm dataAdd={dataAdd} />

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