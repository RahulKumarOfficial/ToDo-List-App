import React, { Component } from "react";
import TodoItems from "./TodoItems";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
    this.AddElement = this.AddElement.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  AddElement(e) {
    console.log("Button add is clicked");
    var newItem = {
      text: this.inputElement.value,
      key: Date.now
    };
    let {text} = newItem;
    console.log(text);
    this.inputElement.value="";
    this.setState(prevState =>{

      return{
        items:prevState.items.concat(newItem)
      };
    });
    console.log(this.state.items);
    this.inputElement.value="";
    e.preventDefault();
  }
  deleteItem(text){
    var filteredItems = this.state.items.filter(function(item){
      return (item.text!==text)
    });
    this.setState({
        items:filteredItems
    });
}
  render() {
    return (
      <div className="contains">
        <div className="formInput">
          <input
            type="text"
            placeholder="Hey! Type something to note"
            ref={a => (this.inputElement = a)}
          />
          <button type="submit" onClick={this.AddElement}>
            Add To List
          </button>
         <TodoItems entries = {this.state.items}
         delete={this.deleteItem}/>
        </div>
      </div>
    );
  }
}
export default App;
