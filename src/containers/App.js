import React from "react";
import uuid from "uuid";
import style from "./App.css";

// Stworzenie kontenera
class App extends React.Component {
  constructor(props) {
    super(props);

    // Ustawienie stanu początkowego
    this.state = {
      data: []
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
        Tutaj pojawią się komponenty aplikacji, yeah !
      </div>
    );
  }
}

export default App;