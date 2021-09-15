import { Component } from "react";
import "./App.css";
import "./scss/app.scss";
import ToDoItem from "./ToDoItem/ToDoItem";
import todosData from "./ToDoItem/todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItem : todosData
    }
  }

  handleChange = (id) => {
    console.log("Значение поменялось", id);
  };

  render() {
    const {todoItem} = this.state;
    const activeTasks = todoItem.map(item => {
      return (
        <ToDoItem
          key={item.id}
          description={item.description}
          completed={item.complited}
          handleChange={() => {
            this.handleChange(item.id);
          }}
        />
      );
    })
  
    return (
      <div className="App">
        {activeTasks}
      </div>
    )
      
  }
}

export default App;
