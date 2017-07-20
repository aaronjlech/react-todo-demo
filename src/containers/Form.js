import React, { Component } from 'react';



class Form extends Component {
   constructor(){
      super();

   }
   handleSubmit = (event) => {
      event.preventDefault();
      let inputVal = event.target.children[0].value;
      this.props.addNewTodo(inputVal);
   }

  render() {
    return (
      <form className="App" onSubmit={this.handleSubmit}>
         <input type="text" name="todoItem"/>
         <button className="btn btn-primary" type="submit">
            Add Todo!
         </button>
      </form>
    );
  }
}

export default Form;
