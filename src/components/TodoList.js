import React from "react";
import style from "./TodoList.css";

const TodoList = props => {
  
  const items = props.data.map(item =>
    <li key={item.id} onClick = {() => props.remove(item.id)}>
      {item.text}
      <button className={style.itemRemove} onClick = {() => props.remove(item.id)}>Delete</button>
    </li>
  )

  return (
    <ul className={style.TodoList}>
      {items}
    </ul>
  )
};

export default TodoList;
