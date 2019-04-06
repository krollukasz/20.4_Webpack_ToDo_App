import React from "react";
import style from "./TodoList.css";

const Todo = props => 
  <li id={props.id}>
    {props.text}
    <button className={style.itemRemove} onClick = {() => props.remove(props.id)}>Delete</button>
  </li>

export default Todo;
