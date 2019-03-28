import React from "react";
import style from "./TodoList.css";

const TodoList = props => (
  props.data.map (item =>
    <li className={style.TodoList} key={item.id}>
      {item.text}
      <button className={style.itemRemove} onClick = {() => props.remove(item.id)}>Delete</button>
    </li>
  )
);

export default TodoList;