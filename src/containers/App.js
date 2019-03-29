import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";
import Todo from "../components/TodoList";
import { hot } from "react-hot-loader";

// Stworzenie kontenera
class App extends React.Component {
  constructor(props) {
    super(props);

    // Ustawienie stanu początkowego
    this.state = {
      data: [{
        id: 1,
        text: "Clean room"
      },
      {
        id: 2,
        text: "Wash the dishes"
      },
      {
        id: 3,
        text: "Feed my cat"
      }]
    };
  }

  // Metoda do dodawania nowych elementów
  addTodo(val) {
    const todo = {
      text: val,
      id: uuid.v4(),
    };
    
    const data = [...this.state.data, todo];
    this.setState({data});
  }
  
  // Metoda do usuwania elementów
  removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
  }
  
  // Metoda renderująca i wyświetlająca aplikację
  render() {
    return (
      <div className={style.TodoApp}>
        <Title title="ToDo App in Webpack and React" numberOfTasks={this.state.data.length}></Title>
        <Todo data = {this.state.data} remove={this.removeTodo.bind(this)} />
      </div>
    );
  }
}

export default hot(module)(App);