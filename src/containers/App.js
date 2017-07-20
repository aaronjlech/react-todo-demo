import React, { Component } from 'react';

import '../styles/App.css';

import Form from './Form';
import TodoItem from '../components/TodoItem';


class App extends Component {
   constructor(){
      super();
      this.state = {
         todoList: [],
         bubbasTodoList: true
      }
   }
   addNewTodo = (todoInfo) => {
      let newTodoList = this.state.todoList
      newTodoList.push(todoInfo)
      this.setState({todoList: newTodoList})
   }
  render() {
     console.log(this.state);
    return (
      <div className="App">
         <Form addNewTodo={this.addNewTodo}/>
         <ul className="list-group">
            {this.state.todoList.map((item, i) => {
               console.log(item);
               return <TodoItem item={item} key={i}/>
            })}
         </ul>
      </div>
    );
  }
}

export default App;
