import React, { Component } from 'react';



export default class TodoItem extends Component {


   render(){
      return(
         <li className="list-group">{this.props.item}</li>
      )
   }
}
