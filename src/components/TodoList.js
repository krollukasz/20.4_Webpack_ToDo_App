import React from "react";
import style from "./TodoList.css";

const TodoList = props => (
  props.todoItems.map (item =>
    <ul className={style.TodoList}>
      <li key={item.id} onClick = {() => props.remove(item.id)}></li>
    </ul>
  )
);

export default TodoList;