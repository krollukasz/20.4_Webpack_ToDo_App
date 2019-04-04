import React from "react";
import style from "./TodoList.css";

const Todo = props => {
  return (
    item => (
      <li key={item.id}>
        {item.text}
        <button className={style.itemRemove} onClick = {() => props.remove(item.id)}>Delete</button>
      </li>
    )
  )
};

export default Todo;








// console.log(props.text)

// <li key={item.id}>
//   {props.text}
//   <button className={style.itemRemove} onClick = {() => props.remove(item.id)}>Delete</button>
// </li>