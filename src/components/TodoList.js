import React from "react";
import Todo from "./Todo";
import style from "./TodoList.css";

const TodoList = props => {
  
  const items = props.data.map(item =>
    <Todo key={item.id} text={item.text} remove={props.remove.bind(this)} >
    <button className={style.itemRemove} onClick = {() => props.remove(props.id)}>Delete</button>
    </Todo>
  )

  return (
    <ul className={style.TodoList}>
      {items}
    </ul>
  )
};

export default TodoList;
