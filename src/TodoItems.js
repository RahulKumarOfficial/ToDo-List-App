import React, { Component } from "react";
class TodoItems extends Component {
  constructor(props) {
    super(props);
    this.deleteItem = this.deleteItem.bind(this);
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(items) {
    return (
      <li>
        {items.text}
        <button type="submit" onClick={this.deleteItems}>
          Delete
        </button>
      </li>
    );
  }
  deleteItem(key){
      this.props.deleteItem(key);
      console.log("passed to todoItems.js");
  }
  render() {
    var TodoEntries = this.props.entries;
    var listItems = TodoEntries.map(this.createTasks);
    return <ul>{listItems}</ul>;
  }
}
export default TodoItems;
