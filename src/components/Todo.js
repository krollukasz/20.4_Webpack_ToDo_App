import React from "react";
import style from "./TodoList.css";

const Todo = props => {item => (
  <li key={item.id}>
    {item.text}
    <button className={style.itemRemove} onClick = {() => props.remove(item.id)}>Delete</button>
  </li>
  // console.log(props.text)
)
};

export default Todo;









// <li key={item.id}>
//   {props.text}
//   <button className={style.itemRemove} onClick = {() => props.remove(item.id)}>Delete</button>
// </li>