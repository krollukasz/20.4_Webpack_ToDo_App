import React from "react";
import style from "./TodoList.css";

const Todo = props => {
  return (
    <li key={props.key}>
      {props.text}
      <button className={style.itemRemove} onClick = {() => props.remove(item.id)}>Delete</button>
    </li>
  )
};

export default Todo;
