import React, {Component} from "react";


export default class NewCard extends Component {
  constructor(){
    super();
    this.state = {
      newcard: "Create a Biz"
    };
  }
  render(){
    return (
        <div className='info'>
          <button>Create New Card</button>
          <h1>New Biz Card: {this.state.newcard}</h1>
          <NewCard />
        </div>
      );
  }
}