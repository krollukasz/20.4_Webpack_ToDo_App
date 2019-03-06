import React from "react";
import style from "./Title.css";

const Title = props => 
  <div className={style.titleText}>
    <h1>{props.title}</h1>
    <p>Number of tasks: {props.numberOfTasks}</p>
  </div>;

export default Title;
